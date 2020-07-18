
import axios, { AxiosResponse } from "axios"
import { ItemsType } from "../redux/friends-reduce"
import { ProfileType, PhotosType, ContactsType, ResponseType } from "../types/State_Profile_Reduce"
export const instance = axios.create({
  //Проверка куки
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "api-key": '3a40cbf7-f412-4822-87d7-a71443902536'
  }
});

export const userApi = {
  usersGet: async (countPage?: number | string) => {
  const response = await instance.get<ResponseType<ItemsType>>(`users?page=${countPage}`)  
  return (response.data)      
  }
}

//типизир res указываем  в AxiosResponse  что ожидаем получить от дата например число
// authApi.authMe().then( (res: AxiosResponse<number>) => res.data)
// можно указать тип ожидаемых данных при отправте запроса get<string> тогда res типизируется автоматически