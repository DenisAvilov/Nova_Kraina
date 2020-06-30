// import { setUser } from './profile-reduce';
import { createStore } from 'redux';
import { getOwnUserId } from './selector-redux';

import { ResultCode } from './../api/Api';

import {  profileApi } from '../api/Api'
import { interLiteralString } from '../types/LiteralFromString'
import { PostType, BriefType, ProfileType, PhotosType, } from './../types/State_Profile_Reduce'
import { RootReducerType } from './store-redux'
import { ThunkAction } from 'redux-thunk'
import general from './general'

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
}
export type InitialStateType = typeof initialState
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
              profile:  {...state.profile, photos : action.foto}
             }
        }
        case SAVE_PROFILE_DATA: {
           
            return {
                ...state,
              profile:  action.profile
             }
        }
        default:
            return state;
    }
}

export const addPost = (newTextPost: string) => ({ type: interLiteralString(ADD_POST), newTextPost } as const);
export const setUser = (profile: ProfileType) => ({ type: interLiteralString(SET_USERS), profile } as const);
export const statusСhanged = (status: string) => ({ type: interLiteralString(STATUS_CHANGE), status } as const);
export const statusSuccess = (status: string) => ({ type: interLiteralString(STATUS_GET), status } as const);
export const saveFotoSuccess = (foto: any ) => ({ type: interLiteralString(SAVE_FOTO), foto } as const);

export const saveProfileData = (profile: ProfileType ) => ({ type: interLiteralString(SAVE_PROFILE_DATA), profile } as const);

//Если мы укажем в дженерике что-то не похожее на string — typescript выдаст нам ошибку
// type onlyString<T> = T extends string ? string : never
// const d:onlyString<string> = "42";
//typeof returnтип Type the c creator'a
//ReturnType return Type function тип экшена

type ActionType = ReturnType<typeof addPost> | ReturnType<typeof setUser> |
                  ReturnType<typeof statusСhanged> | ReturnType<typeof statusSuccess> | ReturnType<typeof saveFotoSuccess> | 
                   ReturnType<typeof saveProfileData>  

export default profile;

//Типизация дистпачей :> рефакторинг 
// type DistpashType = Dispatch<ActionType>
// type GetStateType = () => RootReducerType
//sanka название из документаци \ сан-криейтор 

type ProfileActionCreatorType =  ThunkAction<Promise<void>, RootReducerType, unknown, ActionType> 



export const putProfileData = ( profile: ProfileType ): ProfileActionCreatorType => 
// sank-action название из документации  \ санка  
    async ( dispatch, getOwnUserId ) => {      
        let response = await profileApi.profile(profile)      
        const UserId = getOwnUserId().general.id
        if(response.resultCode === ResultCode.Success){          
            dispatch(setUsers(UserId))   
           }

        
         
}


export const setUsers = (userId: number | null  ): ProfileActionCreatorType => 
// sank-action название из документации  \ санка  
    async (dispatch, getState) => {      

       
        let response = await profileApi.profileUserId(userId)
        dispatch(setUser(response.data)) 
         let data = await profileApi.profileStatusUserId(userId)    
      
         dispatch(statusSuccess(data))
}

export const statusСhangedSuccess = (status: string): ProfileActionCreatorType =>   
    async (dispatch, getState) => {
        let data = await profileApi.profileStatus(status)
        if(data.resultCode === ResultCode.Success){
            dispatch(statusСhanged(status))
        }if(data.resultCode === ResultCode.Error){
            dispatch(statusСhanged(data.messages[0]))
        }
}
export const saveFoto =  ( file: File): ProfileActionCreatorType =>  async (dispatch) => { 
    
        
      let data =  await profileApi.profilePhoto(file)
       if(data.resultCode = ResultCode.Success){
        dispatch(saveFotoSuccess(data.data.large ))  
       }
         
}



// export const exemple = (parametrs) => (dispatch) => { API }