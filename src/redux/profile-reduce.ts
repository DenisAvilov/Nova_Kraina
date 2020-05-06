import { InitialStateType } from './../types/State_Profile_Reduce';
import { usersApi } from '../api/Api'
import { type } from 'os';
import { interLiteralString } from '../types/LiteralFromString';

 const ADD_POST = 'ADD-POST';
 const SET_USERS = 'SET-USERS';

let store: InitialStateType = { 
    userId: null,
    lookingForAJob: null,
    lookingForAJobDescription: null,  
    fullName: null,
    contacts: null,    
    photos: { 
           small: null,
           large: null
        },   
    post: [ {
            id: 0,
            avatarImg: "https://www.w3schools.com/w3css/img_avatar3.png",
            name: 'Никита',
            secondName: 'Авилов',
            title: 'Природа',
            imgPost: "https://www.prostir.ua/wp-content/uploads/2020/03/unnamed-101-1024x576.png",
            like: 45,
            massenge: 'Lorem Ipsum - это текст-"рыба", ой" для текстов на латинице с начала XVI века.то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов',
    
        } ] ,
    briefInformation: {
        userId: 7,
        shortTitle: 'Краткая информация',
        placeStudy: 'National Aerospace University – Kharkov Aviation Institute',
        krayina: 'Ukraine',
        misto: 'Kharkov'
    },
    placeholder: 'Что у вас нового?',
    fake: 1
}

// возвращаемое значение для function profile будет InitialStateType
const profile = (state = store, action: any) : InitialStateType => {
    switch (action.type) {      
        // case "FAKE": return{...state, fake : state.fake + 1} 'ADD-POST'
        case ADD_POST: {
            let newObj = {
                id: 12,
                avatarImg: "https://www.w3schools.com/w3css/img_avatar3.png",
                name: 'Никита',
                secondName: 'Авилов',
                title: 'Природа',
                imgPost: "https://img3.goodfon.ru/wallpaper/nbig/3/cb/freedom-svoboda-nadpis-pesok.jpg",
                like: 99,
                massenge: action.newTextPost.writeNewPost,
            }
            return {
                ...state,
                post: [...state.post, newObj],
                              
            } 
        }
        case SET_USERS: {
            return {
                ...state,
                userId: action.userID
            }
        }
        default:
            return state;
    }


}

export const addPost = (newTextPost: string) => ({ type: interLiteralString(ADD_POST), newTextPost } as const);

export const setUser = (userID: any) => ({ type: interLiteralString(SET_USERS), userID } as const);

//Если мы укажем в дженерике что-то не похожее на string — typescript выдаст нам ошибку
type onlyString<T> = T extends string ? string : never

const d:onlyString<string> = "42";
//typeof returnтип Type the c creator'a
//ReturnType return Type function тип экшена
type ActionType = ReturnType<typeof addPost>  |  ReturnType<typeof setUser>  |  ReturnType<typeof setUsers>

export default profile;

export const setUsers = (userId: number, generalId: number) => {

    return (dispatch: any) => { 

        let userProfileId = userId;
        if (!userProfileId) {
            userProfileId = generalId
        }
        usersApi.profile(userProfileId)
            .then((response: any) => {
             debugger
                dispatch(setUser(response.data))
            })

    }

}



// export const exemple = (parametrs) => (dispatch) => { API }