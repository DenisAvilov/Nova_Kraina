
import { userApi, usersFollow, ResultCode } from "../api/Api";
import { interLiteralString } from "../types/LiteralFromString";
import { trackUsers } from '../untils/object-helpers';
import { ThunkAction } from "redux-thunk";
import { RootReducerType } from "./store-redux";

const ADD_FRIEND = "NOVA-KRAINA/FRIENDS-REDUCE/ADD-FRIEND";
const DEL_FRIEND = "NOVA-KRAINA/FRIENDS-REDUCE/DEL-FRIEND";
const SET_USERS_FRIENDS = "NOVA-KRAINA/FRIENDS-REDUCE/SET-USERS-FRIENDS";
const TRACKING_BUTTON = "NOVA-KRAINA/FRIENDS-REDUCE/TRACKING-BUTTON";
const PAGINATION_CHANGE = "NOVA-KRAINA/FRIENDS-REDUCE/PAGINATION-CHANGE"
 

//[] это певдо истина
type PhotosType = {
  small: null | string
  large: null | string
}
export type ItemsType = {
  followed: boolean
  id: number 
  name: string | null
  photos: PhotosType 
  status: string | null
  uniqueUrlName: null
}

let iniliset = {
  users: [] as Array<ItemsType>,
  usersTracking: [] as Array<number>,  
  count: 10, //count viws users in own page
  page: 1,  
  term: '',
  totalCount: 0,
  
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
        users: action.data.items,
        totalCount: action.data.totalCount       
      }
    }
    case PAGINATION_CHANGE: {
     
      return {
        ...state,       
        page: action.page
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
  ReturnType<typeof stateTrackingButton>  | ReturnType< typeof pagination>

export const add_Friend = (userId: number) => ({ type: interLiteralString(ADD_FRIEND), userId } as const);
export const del_Friend = (userId: number) => ({ type: interLiteralString(DEL_FRIEND), userId } as const);

export const setUsersFriends = (data: any) => ({ type: interLiteralString(SET_USERS_FRIENDS), data } as const);

export const pagination = ( page  : number ) => ({type: interLiteralString(PAGINATION_CHANGE), page } as const)

export const stateTrackingButton = (usersId: number, followed: boolean) =>
 ({ type: interLiteralString(TRACKING_BUTTON), usersId, followed } as const)

export default friends;

type FriendsAction = ThunkAction<Promise<void>, RootReducerType, unknown, ActionType>



export const viewCountPage = (countPage: number):FriendsAction  => {
 
  return async (dispatch) => {    
    let data = await userApi.usersGet(countPage)
    dispatch(setUsersFriends(data)) 
  } 
}


export const getUsersThunkCreator = ():FriendsAction => { 
  return async (dispatch) => {  
   let data = await userApi.usersGet()         
        dispatch(setUsersFriends(data))    
  }
}
// thunkMiddleware 
export const friendFollow = (userID: number):FriendsAction => {
  //возвращаю  санки
  return async (dispatch) => {
   dispatch(stateTrackingButton(userID, true))
  let resultCode = await usersFollow.follow(userID)
  if (resultCode === ResultCode.Success) { dispatch(add_Friend(userID)) }
   dispatch(stateTrackingButton(userID, false))    
  }
}
export const friendUnFollow = (userID: number):FriendsAction => { 
  return async (dispatch) => {
     dispatch(stateTrackingButton(userID, true))
   let resultCode = await  usersFollow.unfollow(userID)   
    if (resultCode === ResultCode.Success) { dispatch(del_Friend(userID)) }

    dispatch(stateTrackingButton(userID, false))
  
  }
}

