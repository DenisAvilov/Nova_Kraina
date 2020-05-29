import axios, { AxiosResponse } from "axios";
import { ItemsType } from "../redux/friends-reduce";
import { ProfileType, PhotosType, ContactsType } from "../types/State_Profile_Reduce";
const instance = axios.create({
  //Проверка куки
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "api-key": '3a40cbf7-f412-4822-87d7-a71443902536'
  }
});
//для проверки вместо 0 
export enum ResultCode  {
 Success = 0,
 Error = 1,
}
export enum ResultCodeFoCaptcha  {  
  CaptchaIsRequired = 10
 } 
type ProfileData = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: {github: string, vk: string, facebook: string, instagram: string, twitter: string, website: string, youtube: string, mainLink: string}
}

type UserApiResponseType = {
  items: Array<ItemsType> 
  totalCount: number
  error: string
 }
export const userApi = {
  usersGet: async () => {
  const response = await instance.get<UserApiResponseType>(`users`)
  return (response.data)      
  },
}
type ResponseProfile = {
  resultCode: number
  messages: Array<string>
  data: {}
}
type ProfileResponseUserId = {
  resultCode: number
  messages: Array<string>
  data: {}
  userId:  number,
  lookingForAJob:  boolean,
  lookingForAJobDescription:  string,
  fullName: string ,
  contacts:  ContactsType,
  photos: PhotosType | undefined 
}
type ProfileResponsePhoto = {
  data: { small: string, large: string}
  resultCode: number
  messages : Array<string>
}
type ProfileResponseStatus ={
  data: {}
  resultCode: number
  messages : Array<string>
}
type ProfileResponseStatusUserId = {
  media: string  
}

export const profileApi = {
  profile: (data: ProfileData) => {  
    return instance.put<ResponseProfile>(`profile`, data )
  },
  profilePhoto: (image: {}) => {  
    return instance.put<ProfileResponsePhoto>(`profile/photo`, image )
  },
  profileStatus: (status: string) => {  
    return instance.put<ProfileResponseStatus>(`profile/status`, status )
  },
  profileStatusUserId: (userId: number) => {  
    return instance.get<ProfileResponseStatusUserId>(`profile/status/` + userId )
  }, 
  profileUserId: (userId: number | null) => {  
    return instance.get<ProfileResponseUserId>(`profile/` + userId)
  },
}

type UsersFollowUnfollowType = {
  resultCode: number
  messages: Array<string>
  data: {}
}

export const usersFollow = {
  follow: async (userId: number) => {
    let response = await  instance.post<UsersFollowUnfollowType>(`follow/${userId}`, {})   
    return response.data.resultCode      
  },
  unfollow: async (userId: number) => {
    let response = await instance.delete<UsersFollowUnfollowType>(`follow/` + userId)
    return response.data.resultCode    
  },
  isCurrentUserFollower: async (userId: number) => {
    let response = await instance.get<{isType: boolean}>(`follow/` + userId)
    return response.data.isType
  }
}
type AuthApiResponseType = { 
  data: { id: number, email: string, login: string }
  resultCode: number    
  messages: Array<string>  
}
type AuthApiResponseAuthLogin = {
  resultCode: number
  messages: Array<string> 
  data: {userId: number}
}

export const authApi = {
  authMe : async () => {
    const response = await  instance.get<AuthApiResponseType>('auth/me') 
    return response
  },
  authLogin : (email: string, password: number | string, rememberMe: boolean, captcha: string ) => {
    return instance.post<AuthApiResponseAuthLogin>('/auth/login', {email, password, rememberMe, captcha})
  },
  authDelete : () => {
    return instance.delete<{ resultCode: number, messages: Array<string>, data: {} }>('/auth/login' )
  }    
}
//типизир res указываем  в AxiosResponse  что ожидаем получить от дата например число
// authApi.authMe().then( (res: AxiosResponse<number>) => res.data)
// можно указать тип ожидаемых данных при отправте запроса get<string> тогда res типизируется автоматически