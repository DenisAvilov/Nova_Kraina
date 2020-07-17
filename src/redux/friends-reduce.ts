
import { userApi } from '../api/Api'
import { usersFollow } from '../api/UsersFollow'
import { interLiteralString } from '../types/LiteralFromString'
import { trackUsers } from '../untils/object-helpers'
import { ResultCodeEnum } from '../api/AuthApi'
import { ActionsTypes, BaseActionType } from './store-redux'


const ADD_FRIEND = "NOVA-KRAINA/FRIENDS-REDUCE/ADD-FRIEND"
const DEL_FRIEND = "NOVA-KRAINA/FRIENDS-REDUCE/DEL-FRIEND"
const SET_USERS_FRIENDS = "NOVA-KRAINA/FRIENDS-REDUCE/SET-USERS-FRIENDS"
const TRACKING_BUTTON = "NOVA-KRAINA/FRIENDS-REDUCE/TRACKING-BUTTON"
const PAGINATION_CHANGE = "NOVA-KRAINA/FRIENDS-REDUCE/PAGINATION-CHANGE"



let iniliset = {
  users: [] as Array<ItemsType>,
  usersTracking: [] as Array<number>,
  count: 10, //count viws users in own page
  page: 1,
  term: '',
  totalCount: 0,
}

const friends = (state = iniliset, action: ActionType): InilisetType => {
  switch (action.type) {
    case ADD_FRIEND: {
      return {
        ...state,
        users: trackUsers(state.users, "id", action.userId, { followed: true })
      }
    }
    case DEL_FRIEND: {
      return {
        ...state,
        users: trackUsers(state.users, "id", action.userId, { followed: false })
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

export const actions = {
  add_Friend: (userId: number) => ({ type: interLiteralString(ADD_FRIEND), userId } as const),
  del_Friend: (userId: number) => ({ type: interLiteralString(DEL_FRIEND), userId } as const),
  setUsersFriends: (data: any) => ({ type: interLiteralString(SET_USERS_FRIENDS), data } as const),
  setPagination: (page: number) => ({ type: interLiteralString(PAGINATION_CHANGE), page } as const),
  stateTrackingButton: (usersId: number, followed: boolean) => ({ type: interLiteralString(TRACKING_BUTTON), usersId, followed } as const)
}

export default friends;

export const pagination = (page: number): FriendsAction => {
  return async (dispatch) => {
    dispatch(actions.setPagination(page))
  }
}
export const viewCountPage = (countPage: number | string): FriendsAction => {

  return async (dispatch) => {
    let data = await userApi.usersGet(countPage)
    dispatch(actions.setUsersFriends(data))
  }
}
export const getUsersThunkCreator = (): FriendsAction => {
  return async (dispatch) => {
    let data = await userApi.usersGet()
    dispatch(actions.setUsersFriends(data))
  }
}
export const friendFollow = (userID: number): FriendsAction => {
  //возвращаю  санки
  return async (dispatch) => {
    dispatch(actions.stateTrackingButton(userID, true))
    let resultCode = await usersFollow.follow(userID)
    if (resultCode === ResultCodeEnum.Success) { dispatch(actions.add_Friend(userID)) }
    dispatch(actions.stateTrackingButton(userID, false))
  }
}
export const friendUnFollow = (userID: number): FriendsAction => {
  return async (dispatch) => {
    dispatch(actions.stateTrackingButton(userID, true))
    let resultCode = await usersFollow.unfollow(userID)
    if (resultCode === ResultCodeEnum.Success) { dispatch(actions.del_Friend(userID)) }
    dispatch(actions.stateTrackingButton(userID, false))

  }
}


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


//Типмзация стэйта
export type InilisetType = typeof iniliset
//Типизацтя акшинов
type ActionType = ActionsTypes<typeof actions>
//Типизацтя Санкриейторов
type FriendsAction = BaseActionType<ActionType>