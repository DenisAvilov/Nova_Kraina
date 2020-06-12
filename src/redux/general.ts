import { GeneralType } from './../types/State_General_Reduce';
import {  authApi, ResultCode, ResultCodeFoCaptcha, securityApi } from "../api/Api"
import { stopSubmit } from "redux-form"
import { interLiteralString } from '../types/LiteralFromString'
import { RootReducerType } from './store-redux'
import { ThunkAction } from 'redux-thunk'


const TO_COME_IN = "NOVA-KRAINA/GENERAL/TO-COME-IN"
const IS_OPEN = "NOVA-KRAINA/GENERAL/OPEN"
const SECURITY_CAPTCHA = "NOVA-KRAINA/GENERAL/CAPTCHA"


let iniliset: GeneralType = { 
  id: null,
  email: null,
  login: null,
  isYou: false,
  isOpen: false,
  captcha: null 
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
    default:
      return state;
  }

}
type ActionType = ReturnType<typeof to_came_in>  | ReturnType<typeof is_open> |  ReturnType<typeof captchaOk>

 const to_came_in = (email: null | string, id: null | number, login: null | number | string, isYou: boolean) =>
  ({ type: interLiteralString(TO_COME_IN), email, id, login, isYou } as const);

  const is_open = () => ({ type: interLiteralString(IS_OPEN) } as const);



  const captchaOk = (url: string | null ) => ({ type: interLiteralString(SECURITY_CAPTCHA), url } as const);

type GeneralActionCreatorType = ThunkAction<Promise<void>, RootReducerType, unknown, ActionType>

export const getUsersData = ():GeneralActionCreatorType => async (distpach) => {
  const response = await authApi.authMe()  
  if (response.data.resultCode === ResultCode.Success) {
    distpach(to_came_in(response.data.data.email, response.data.data.id, response.data.data.login, true))
  }
}

export const is_login = (email: string, password: number | string, rememberMe: boolean = false , captcha: string | null):GeneralActionCreatorType  => 
async (distpach) => {
  const response = await authApi.authLogin(email, password, rememberMe, captcha)
  if (response.data.resultCode === ResultCode.Success) {

    const response = await authApi.authMe()
    distpach(to_came_in(response.data.data.email, response.data.data.id, response.data.data.login, true))
  }
  if (response.data.resultCode === ResultCodeFoCaptcha.CaptchaIsRequired) {    
    distpach(stopSubmit("loginField", { _error: response.data.messages }));  
         let url = await securityApi.security()
         
         distpach(captchaOk(url))
      
  }
  else {
    //диспатчим общую ошибку с сервера 
     distpach(stopSubmit("loginField", { _error: response.data.messages }));
  }

}
export const is_logOut = ():GeneralActionCreatorType => async (distpach) => {
  const response = await authApi.authDelete()
  if (response.data.resultCode === ResultCode.Success) {
    distpach(to_came_in(null, null, null, false))
  }
}

export default general;