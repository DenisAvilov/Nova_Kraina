import * as axios from "axios";
const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "api-key": '3a40cbf7-f412-4822-87d7-a71443902536'
  }
});


export const usersApi = {
  usersGet: () => {
    return instance.get(`users`)
      .then(response => {
        return (response.data)
      })
  },
  profile: (userProfileId) => {
    return instance.get(`profile/` + userProfileId)
  },
  follow: (userId) => {
    return instance.post(`follow/${userId}`, {})
      .then(
        (response) => {
         
          return response.data.resultCode
        })
  },

  unfollow: (userFollow) => {
    return instance.delete(`follow/` + userFollow).then(
      (response) => {
       
        return response.data.resultCode
      })
  }

} 