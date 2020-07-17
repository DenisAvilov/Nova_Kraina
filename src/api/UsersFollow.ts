import { instance } from "./Api"
import { ResponseType } from "../types/State_Profile_Reduce";

export const usersFollow = {
    follow: async (userId: number) => {
      let response = await  instance.post<ResponseType>(`follow/${userId}`, {})   
      return response.data.resultCode      
    },
    unfollow: async (userId: number) => {
      let response = await instance.delete<ResponseType>(`follow/` + userId)
      return response.data.resultCode    
    },
    isCurrentUserFollower: async (userId: number) => {
      let response = await instance.get<{isType: boolean}>(`follow/` + userId)
      return response.data.isType
    }
  }