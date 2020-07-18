import { ProfileType, PhotosType, ContactsType, ResponseType } from "../types/State_Profile_Reduce";
import { instance } from "./Api";

type ProfileData = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {github: string, vk: string, facebook: string, instagram: string, twitter: string, website: string, youtube: string, mainLink: string}
  }
  
  type ProfileResponseUserId = {
    userId:  number,
    lookingForAJob:  boolean,
    lookingForAJobDescription:  string,
    fullName: string ,
    contacts:  ContactsType,
    photos: PhotosType 
    aboutMe: string
  }
  
export const profileApi = {
    profile: (data: ProfileData) => {  
      return instance.put<ResponseType<ProfileType>>(`profile`, data ).then( response => response.data)
    },
    profilePhoto: (image: File) => {  
    
    const formData = new FormData()
        formData.append("image", image )
  
      return instance.put<ResponseType<PhotosType>>(`profile/photo`,  formData ,{                      
        headers: { 'Content-Type':'multipart/form-data' }}).then( response => response.data )
    },
    profileStatus: (status: string) => {     
      return instance.put<ResponseType<ProfileType>>(`profile/status`,{status} ).then( response => response.data)
    },
    profileStatusUserId: (userId: number | null | string) => {      
      return instance.get<string>(`profile/status/` + userId ).then( response => response.data)
      }, 
    profileUserId: (userId: number | null | string) => {  
      return instance.get<ProfileResponseUserId>(`profile/` + userId)
    },
  }
  