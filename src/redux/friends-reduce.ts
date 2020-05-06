import { type } from 'os';
import { usersApi } from "../api/Api";
import { interLiteralString } from "../types/LiteralFromString";

const ADD_FRIEND = "ADD-FRIEND";
const DEL_FRIEND = "DEL-FRIEND";
const SET_USERS_FRIENDS = "SET-USERS-FRIENDS";
const TRACKING_BUTTON = "TRACKING-BUTTON";

type Id = {
  id: number
}

let Iniliset = {
  users: [] as Array<Id>,
  usersTracking: [] as Array<number>,
  tracking: null as boolean | null
}

export type InilisetType = typeof Iniliset

let iniliset: InilisetType = {
  users: [],
  usersTracking: [],
  tracking: null
}
const friends = (state = iniliset, action: ActionType): InilisetType => {
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

type PhotosType = {
  small: null | string
  large: null | string
}
type ItemsType = {
  followed: boolean
  id: number
  name: string
  photos: PhotosType
  status: null
  uniqueUrlName: null
}

export const del_Friend = (userId: number) => ({ type: interLiteralString(DEL_FRIEND), userId } as const);
export const setUsersFriends = (items: Array<ItemsType>) => ({ type: interLiteralString(SET_USERS_FRIENDS), items } as const);
export const stateTrackingButton = (usersId: number, followed: boolean) => ({ type: interLiteralString(TRACKING_BUTTON), usersId, followed } as const)
export default friends;

export const getUsersThunkCreator = () => {
  //возвращаю  санки
  return (dispatch: any) => {
    usersApi.usersGet()
      .then((data: any) => {

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