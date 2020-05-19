import { GeneralType } from './../types/State_General_Reduce';
import { usersApi, authApi } from "../api/Api";
import { stopSubmit } from "redux-form";
import { interLiteralString } from '../types/LiteralFromString';

const TO_COME_IN = "NOVA-KRAINA/GENERAL/TO-COME-IN";
const IS_OPEN = "NOVA-KRAINA/GENERAL/OPEN";
const IS_CLOSE = "NOVA-KRAINA/GENERAL/CLOSE";


let iniliset: GeneralType = {
  id: null,
  email: null,
  login: null,
  isYou: false,
  isOpen: false,
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
    case IS_CLOSE: {
      return {
        ...state,
        isOpen: state.isOpen = false
      }
    }
    default:
      return state;
  }

}
type ActionType = ReturnType<typeof to_came_in> | ReturnType<typeof is_open> | ReturnType<typeof is_close>

export const to_came_in = (email: null | string, id: null | number, login: null | number | string, isYou: boolean) =>
  ({ type: interLiteralString(TO_COME_IN), email, id, login, isYou } as const);

export const is_open = () => ({ type: interLiteralString(IS_OPEN) } as const);
export const is_close = () => ({ type: interLiteralString(IS_CLOSE) } as const);
export const getUsersData = () => async (distpach: any) => {
  const response: any = await usersApi.authApi()
  if (response.data.resultCode === 0) {
    distpach(to_came_in(response.data.data.email, response.data.data.id, response.data.data.login, true))
  }
}
export const is_login = (email: string, password: number | string, rememberMe: boolean = false) => async (distpach: any) => {
  const response: any = await authApi.authLogin(email, password, rememberMe)
  if (response.data.resultCode === 0) {
    const response: any = await authApi.authMe()
    distpach(to_came_in(response.data.data.email, response.data.data.id, response.data.data.login, true))
  }
  else {
    //диспатчим общую ошибку с сервера 
    distpach(stopSubmit("loginField", { _error: response.data.messages }));
  }

}
export const is_logOut = () => async (distpach: any) => {
  const response: any = await authApi.authDelete()

  if (response.data.resultCode === 0) {
    distpach(to_came_in(null, null, null, false))
  }
}

export default general;