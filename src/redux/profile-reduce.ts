import { usersApi } from '../api/Api';
import { interLiteralString } from '../types/LiteralFromString';
import { PostType, BriefType, ProfileType, } from './../types/State_Profile_Reduce';
const ADD_POST = 'NOVA-KRAINA/PROFILE-REDUCE/ADD-POST';
const SET_USERS = 'NOVA-KRAINA/PROFILE-REDUCE/SET-USERS';
let initialState = {
    profile: {} as ProfileType,
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
        default:
            return state;
    }
}

type AddPostType = {
    type: typeof ADD_POST
    newTextPost: string
}

export const addPost = (newTextPost: string): AddPostType => ({ type: interLiteralString(ADD_POST), newTextPost } as const);

type SetUserType = {
    type: typeof SET_USERS
    profile: ProfileType
}

export const setUser = (profile: ProfileType): SetUserType => ({ type: interLiteralString(SET_USERS), profile } as const);

//Если мы укажем в дженерике что-то не похожее на string — typescript выдаст нам ошибку

// type onlyString<T> = T extends string ? string : never

// const d:onlyString<string> = "42";

//typeof returnтип Type the c creator'a
//ReturnType return Type function тип экшена

type ActionType = ReturnType<typeof addPost> | ReturnType<typeof setUser>

export default profile;

export const setUsers = (userId: number | null, generalId: number | null) => {

    return async (dispatch: any) => {

        let userProfileId = userId;
        if (!userProfileId) {
            userProfileId = generalId
        }
        let response: any = await usersApi.profile(userProfileId)
        dispatch(setUser(response.data))
    }
}

// export const exemple = (parametrs) => (dispatch) => { API }