import { type } from 'os';
import { usersApi } from "../api/Api";
import { interLiteralString } from "../types/LiteralFromString";

const ADD_FRIEND = "ADD-FRIEND";
const DEL_FRIEND = "DEL-FRIEND";
const SET_USERS_FRIENDS = "SET-USERS-FRIENDS";
const TRACKING_BUTTON = "TRACKING-BUTTON";

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
        users: state.users.map(u => {
          if (u.id === action.userId) { return { ...u, followed: true } }
          return u;
        })
      }
    }
    case DEL_FRIEND: {

      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u;
        })
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
  //возвращаю  санки
  return (dispatch: any) => {
    usersApi.usersGet()
      .then((data: dataType) => {

        dispatch(setUsersFriends(data.items))
      })
  }
}
export const friendFollow = (userID: number) => {
  //возвращаю  санки
  return (dispatch: any) => {

    dispatch(stateTrackingButton(userID, true))

    usersApi.follow(userID).then((resultCode: number) => {

      if (resultCode === 0) {

        dispatch(add_Friend(userID))
      }

      dispatch(stateTrackingButton(userID, false))
    })
  }
}
export const friendUnFollow = (userID: number) => {
  //возвращаю  санки
  return (dispatch: any) => {

    dispatch(stateTrackingButton(userID, true))

    usersApi.unfollow(userID).then((resultCode: number) => {

      if (resultCode === 0) {

        dispatch(del_Friend(userID))
      }

      dispatch(stateTrackingButton(userID, false))
    })
  }
}