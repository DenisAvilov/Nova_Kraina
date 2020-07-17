import { instance } from "./Api"

//для проверки на ошибки вместо 0, может перечеслять строки и числа
export enum ResultCodeEnum  {
    Success = 0,
    Error = 1,
   }
   export enum ResultCodeFoCaptcha  {  
     CaptchaIsRequired = 10
    } 

type AuthApiResponseType = { 
    data: { id: number, email: string, login: string }
    resultCode: ResultCodeEnum    
    messages: Array<string>  
  }
  type AuthApiResponseAuthLogin = {
    resultCode: ResultCodeEnum | ResultCodeFoCaptcha
    messages: Array<string> 
    data: {userId: number}
  }

export const authApi = {
    authMe : async () => {
      const response = await  instance.get<AuthApiResponseType>('auth/me') 
      return response.data
    },
    authLogin : (email: string, password: number | string, rememberMe: boolean, captcha: string | null) => {
     
      return instance.post<AuthApiResponseAuthLogin>('/auth/login', {email, password, rememberMe, captcha})
    },
    authDelete : () => {
      return instance.delete<{ resultCode: number, messages: Array<string>, data: {} }>('/auth/login' )
    }    
  }