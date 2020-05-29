import { GeneralType } from './../types/State_General_Reduce';
import {  authApi, ResultCode } from "../api/Api";
import { stopSubmit } from "redux-form";
import { interLiteralString } from '../types/LiteralFromString';
import { RootReducerType } from './store-redux';
import { ThunkAction } from 'redux-thunk';


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

 const to_came_in = (email: null | string, id: null | number, login: null | number | string, isYou: boolean) =>
  ({ type: interLiteralString(TO_COME_IN), email, id, login, isYou } as const);
 const is_open = () => ({ type: interLiteralString(IS_OPEN) } as const);
 const is_close = () => ({ type: interLiteralString(IS_CLOSE) } as const);

type GeneralActionCreatorType = ThunkAction<Promise<void>, RootReducerType, unknown, ActionType>

export const getUsersData = ():GeneralActionCreatorType => async (distpach) => {
  const response = await authApi.authMe()  
  if (response.data.resultCode === ResultCode.Success) {
    distpach(to_came_in(response.data.data.email, response.data.data.id, response.data.data.login, true))
  }
}

export const is_login = (email: string, password: number | string, rememberMe: boolean = false , captcha: string):GeneralActionCreatorType  => 
async (distpach) => {
  const response = await authApi.authLogin(email, password, rememberMe, captcha)
  if (response.data.resultCode === ResultCode.Success) {
    const response = await authApi.authMe()
    distpach(to_came_in(response.data.data.email, response.data.data.id, response.data.data.login, true))
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