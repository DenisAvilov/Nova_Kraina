import { ResultCodeEnum, ResultCodeFoCaptcha, authApi } from './../api/AuthApi'
import { PhotosType } from './../types/State_Profile_Reduce'
import { GeneralType } from './../types/State_General_Reduce'
import { stopSubmit } from "redux-form"
import { interLiteralString } from '../types/LiteralFromString'
import { ActionsTypes, BaseActionType, RootReducerType } from './store-redux'
import { profileApi } from '../api/ProfileApi'
import { securityApi } from '../api/SecurityApi'

const TO_COME_IN = "NOVA-KRAINA/GENERAL/TO-COME-IN"
const IS_OPEN = "NOVA-KRAINA/GENERAL/OPEN"
const SECURITY_CAPTCHA = "NOVA-KRAINA/GENERAL/CAPTCHA"
const MY_PHOTO_PROFILE = "NOVA-KRAINA/GENERAL/MY_PHOTO_PROFILE"

let iniliset: GeneralType = {
  id: null,
  email: null,
  login: null,
  isYou: false,
  isOpen: false,
  captcha: null,
  photo: {
    small: null,
    large: null
  }
}
//Принимает  State and return Type as state : GeneralType
const general = (state = iniliset, action: ActionType): GeneralType => {

  switch (action.type) {
    case TO_COME_IN: {
      return {
        ...state,
        id: action.id,
        email: action.email,
        login: action.login,
        isYou: action.isYou
      }
    }
    case IS_OPEN: {
      return {
        ...state,
        isOpen: state.isOpen = true
      }
    }
    case SECURITY_CAPTCHA: {
      return {
        ...state,
        captcha: action.url
      }
    }
    case MY_PHOTO_PROFILE: {
      return {
        ...state,
        photo: action.photos
      }
    }
    default:
      return state;
  }
}

export const actions = {
  to_came_in: (email: null | string, id: null | number, login: null | number | string, isYou: boolean) =>
    ({ type: interLiteralString(TO_COME_IN), email, id, login, isYou } as const),
  is_open: () => ({ type: interLiteralString(IS_OPEN) } as const),
  captchaOk: (url: string | null) => ({ type: interLiteralString(SECURITY_CAPTCHA), url } as const),
  myPhotoSuccess: (photos: PhotosType) => ({ type: interLiteralString(MY_PHOTO_PROFILE), photos } as const)
}

export const getPhotoUser = (uresId: number | null): ThunkType => async (distpach) => {
  const response = await profileApi.profileUserId(uresId)
  distpach(actions.myPhotoSuccess(response.data.photos))
}
export const getUsersData = (): ThunkType => async (distpach) => {
  const response = await authApi.authMe()
  if (response.resultCode === ResultCodeEnum.Success) {
    let { email, id, login } = response.data
    distpach(actions.to_came_in(email, id, login, true))
  }
}
export const is_login = (email: string, password: number | string, rememberMe: boolean = false, captcha: string | null): ThunkType =>
  async (distpach) => {
    const response = await authApi.authLogin(email, password, rememberMe, captcha)
    if (response.data.resultCode === ResultCodeEnum.Success) {
      const response = await authApi.authMe()
      let { email, id, login } = response.data
      distpach(actions.to_came_in(email, id, login, true))
    }
    if (response.data.resultCode === ResultCodeFoCaptcha.CaptchaIsRequired) {
      distpach(stopSubmit("loginField", { _error: response.data.messages }));
      let url = await securityApi.security()
      distpach(actions.captchaOk(url))
    }
    else {
      //диспатчим общую ошибку с сервера 
      distpach(stopSubmit("loginField", { _error: response.data.messages }));
    }
  }
export const is_logOut = (): ThunkType => async (distpach) => {
  const response = await authApi.authDelete()
  if (response.data.resultCode === ResultCodeEnum.Success) {
    distpach(actions.to_came_in(null, null, null, false))
  }
}

export default general;


type ActionType = ActionsTypes<typeof actions>

type ThunkType = BaseActionType<ActionType>

