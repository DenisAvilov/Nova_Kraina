
import { usersApi } from "../api/Api";
import { interLiteralString } from "../types/LiteralFromString";
import { trackUsers } from '../untils/object-helpers';

const ADD_FRIEND = "NOVA-KRAINA/FRIENDS-REDUCE/ADD-FRIEND";
const DEL_FRIEND = "NOVA-KRAINA/FRIENDS-REDUCE/DEL-FRIEND";
const SET_USERS_FRIENDS = "NOVA-KRAINA/FRIENDS-REDUCE/SET-USERS-FRIENDS";
const TRACKING_BUTTON = "NOVA-KRAINA/FRIENDS-REDUCE/TRACKING-BUTTON";

//[] это певдо истина
type PhotosType = {
  small: null | string
  large: null | string
}
export type ItemsType = {
  followed: boolean
  id: number
  name: string
  photos: PhotosType
  status: null
  uniqueUrlName: null
}

let iniliset = {
  users: [] as Array<ItemsType>,
  usersTracking: [] as Array<number>,  
}

export type InilisetType = typeof iniliset

const friends = (state = iniliset , action: ActionType): InilisetType => {
  switch (action.type) {
    case ADD_FRIEND: {
      return {
        ...state,
        users:   trackUsers(state.users,"id", action.userId, {followed: true})      
      }
    }
    case DEL_FRIEND: {
      return {
        ...state,
        users:  trackUsers(state.users,"id", action.userId, {followed: false})   
      }
    }
    case SET_USERS_FRIENDS: {
      return {
        ...state,
        users: action.items
      }
    }
    case TRACKING_BUTTON: {
      return {
        ...state, usersTracking: action.followed
          ? [...state.usersTracking, action.usersId]
          : state.usersTracking.filter(id => id != action.usersId)
      }
    }
    default:
      return state;
  }
}

type ActionType = ReturnType<typeof add_Friend> | ReturnType<typeof del_Friend> | ReturnType<typeof setUsersFriends> |
  ReturnType<typeof stateTrackingButton>

export const add_Friend = (userId: number) => ({ type: interLiteralString(ADD_FRIEND), userId } as const);
export const del_Friend = (userId: number) => ({ type: interLiteralString(DEL_FRIEND), userId } as const);
export const setUsersFriends = (items: any) => ({ type: interLiteralString(SET_USERS_FRIENDS), items } as const);
export const stateTrackingButton = (usersId: number, followed: boolean) =>
 ({ type: interLiteralString(TRACKING_BUTTON), usersId, followed } as const)

export default friends;
type dataType = {
  error: null | string
  items:  Array<ItemsType>
  totalCount : number
  __proto__: {}
}

export const getUsersThunkCreator = () => { 
  return async (dispatch: any) => {
   //возвращаю  санки
   let data: dataType = await usersApi.usersGet()
        dispatch(setUsersFriends(data.items))    
  }
}
export const friendFollow = (userID: number) => {
  //возвращаю  санки
  return async (dispatch: any) => {
   dispatch(stateTrackingButton(userID, true))
  let resultCode: number = await usersApi.follow(userID)
  if (resultCode === 0) { dispatch(add_Friend(userID)) }
   dispatch(stateTrackingButton(userID, false))    
  }
}
export const friendUnFollow = (userID: number) => {
  //возвращаю  санки
  return async (dispatch: any) => {

     dispatch(stateTrackingButton(userID, true))

   let resultCode: number = await  usersApi.unfollow(userID)
    if (resultCode === 0) { dispatch(del_Friend(userID)) }

    dispatch(stateTrackingButton(userID, false))
  
  }
}