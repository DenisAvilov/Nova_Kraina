import { ResultCodeEnum } from '../api/AuthApi'
import { profileApi } from '../api/ProfileApi'
import { interLiteralString } from '../types/LiteralFromString'
import { PostType, BriefType, ProfileType, ResponseFriendType } from './../types/State_Profile_Reduce'
import { ActionsTypes, BaseActionType } from './store-redux'
import { stopSubmit } from 'redux-form'
import { ItemsType } from './friends-reduce'


const ADD_POST = 'NOVA-KRAINA/PROFILE-REDUCE/ADD-POST'
const SET_USERS = 'NOVA-KRAINA/PROFILE-REDUCE/SET-USERS'
const STATUS_CHANGE = 'NOVA-KRAINA/PROFILE-REDUCE/STATUS-CHANGE'
const STATUS_GET = 'NOVA-KRAINA/PROFILE-REDUCE/STATUS-GET'
const SAVE_FOTO = 'NOVA-KRAINA/PROFILE-REDUCE/SAVE-FOTO'
const SAVE_PROFILE_DATA = 'NOVA-KRAINA/PROFILE-REDUCE/SAVE-PROFILE-DATA'

let initialState = {
    profile: {} as ProfileType,
    status: "Добавьте информацию",
    post: [{
        id: 0,
        avatarImg: "https://www.w3schools.com/w3css/img_avatar3.png",
        name: 'Никита',
        secondName: 'Авилов',
        title: 'Природа',
        imgPost: "https://www.prostir.ua/wp-content/uploads/2020/03/unnamed-101-1024x576.png",
        like: 45,
        massenge: 'Lorem Ipsum - это текст-"рыба", ой" длятник создал больum для распечатки образцов',
    }
    ] as Array<PostType>,
    briefInformation: {
        userId: 7,
        shortTitle: 'Краткая информация',
        placeStudy: 'National Aerospace University – Kharkov Aviation Institute',
        krayina: 'Ukraine',
        misto: 'Kharkov'
    } as BriefType,
    placeholder: 'Что у вас нового?',
    friend: {} as ResponseFriendType<ItemsType>
}

// возвращаемое значение для function profile будет InitialStateType
const profile = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newObj = {
                id: 12,
                avatarImg: "https://www.w3schools.com/w3css/img_avatar3.png",
                name: 'Никита',
                secondName: 'Авилов',
                title: 'Природа',
                imgPost: "https://img3.goodfon.ru/wallpaper/nbig/3/cb/freedom-svoboda-nadpis-pesok.jpg",
                like: 99,
                massenge: action.newTextPost
            }
            return {
                ...state,
                post: [...state.post, newObj],
            }
        }
        case SET_USERS: {

            return {
                ...state,
                profile: action.profile
            }
        }
        case STATUS_GET: {

            return {
                ...state,
                status: action.status
            }
        }
        case STATUS_CHANGE: {
            return {
                ...state,
                status: action.status
            }
        }
        case SAVE_FOTO: {

            return {
                ...state,
                profile: { ...state.profile, photos: action.foto }
            }
        }
        case SAVE_PROFILE_DATA: {

            return {
                ...state,
                profile: action.profile
            }
        }
       
        default:
            return state;
    }
}

export const actions = {
    setUser: (profile: ProfileType) => ({ type: interLiteralString(SET_USERS), profile } as const),
    statusСhanged: (status: string) => ({ type: interLiteralString(STATUS_CHANGE), status } as const),
    statusSuccess: (status: string) => ({ type: interLiteralString(STATUS_GET), status } as const),
    saveFotoSuccess: (foto: any) => ({ type: interLiteralString(SAVE_FOTO), foto } as const),
    saveProfileData: (profile: ProfileType) => ({ type: interLiteralString(SAVE_PROFILE_DATA), profile } as const),
    newPost: (newTextPost: string) => ({ type: interLiteralString(ADD_POST), newTextPost } as const) 
}

//Если мы укажем в дженерике что-то не похожее на string — typescript выдаст нам ошибку
// type onlyString<T> = T extends string ? string : never

export default profile;



export const putProfileData = (profile: ProfileType): ThunkType =>
    // sank-action название из документации  \ санка  
    //I don't know how i mast typing this distpath 
    async (dispatch, getOwnUserId) => {
        let response = await profileApi.profile(profile)
        const UserId = getOwnUserId().general.id
        if (response.resultCode === ResultCodeEnum.Success) {
            dispatch(setUsers(UserId))
        }
        else {
            dispatch(stopSubmit("UserAboutWork", { _error: response.messages }))
        }
        stopSubmit("UserAboutWork", { _error: response.messages })
    }

export const setUsers = (userId: number | null | string): ThunkType =>
    // sank-action название из документации  \ санка  
    async (dispatch, getState) => {
        let response = await profileApi.profileUserId(userId)
        dispatch(actions.setUser(response.data))
        let data = await profileApi.profileStatusUserId(userId)
        dispatch(actions.statusSuccess(data))
    }

export const statusСhangedSuccess = (status: string): ThunkType =>
    async (dispatch, getState) => {
        let data = await profileApi.profileStatus(status)
        if (data.resultCode === ResultCodeEnum.Success) {
            dispatch(actions.statusСhanged(status))
        } if (data.resultCode === ResultCodeEnum.Error) {
            dispatch(actions.statusСhanged(data.messages[0]))
        }
    }
export const saveFoto = (file: File): ThunkType => async (dispatch) => {
    let data = await profileApi.profilePhoto(file)
    if (data.resultCode = ResultCodeEnum.Success) {
        dispatch(actions.saveFotoSuccess(data.data.large))
    }
}

export const addPost = (writeNewPost: string): ThunkType => async (dispatch) => {
    dispatch(actions.newPost(writeNewPost))
}


export type InitialStateType = typeof initialState
export type ActionType = ActionsTypes<typeof actions>
//Передаем в наш тип дополнительный тип: stopSubmit 
type ThunkType = BaseActionType<ActionType | ReturnType<typeof stopSubmit>>


// type DistpashType = Dispatch<ActionType>
// type GetStateType = () => RootReducerType
// export const exemple = (parametrs) => (dispatch) => { API }