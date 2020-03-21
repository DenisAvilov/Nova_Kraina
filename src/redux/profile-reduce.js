const  ADD_POST = 'ADD-POST';
const ADD_NEW_PLACE_HOLDER = 'ADD-NEW-PLACE-HOLDER';
const SET_USERS = 'SET-USERS'

let store =  {
    //profile: [{
    //     id: 0,
    //     name: 'Илья',
    //     second_Name: 'Авилов',
    //     bg_logo: "https://www.dswiss.com/assets/components/phpthumbof/cache/Office_PC1.27be4b79db61149d2ae0a950ea0d216f.jpg",
    //     get bg_logo_alt() {
    //         return this.name + " " + this.second_Name;
    //     },
    //     user_avatar: "http://avilovdenis.pp.ua/img/2-mini-min.png",
    //     get user_avtar_alt() {
    //         return this.name + " " + this.second_Name;
    //     },
    //     photos: {
    //         large: null,
    //         small: null,
    //     }  
    // }],
    profile:{ 

       photos:{
           small: null,
           large: null
       }
    },
    briefInformation: [{
        id: 0,
        h1: 'Краткая информация',
        studied: 'National Aerospace University – Kharkov Aviation Institute',
        lives: 'Харьков',
        from: 'Харьков'
    }],
    post: [
         {
         id: 0,
         avatarImg: "http://avilovdenis.pp.ua/img/2-mini-min.png",
         name: 'Никита',
         secondName: 'Авилов',
         title: 'Природа',
           imgPost: "https://www.prostir.ua/wp-content/uploads/2020/03/unnamed-101-1024x576.png",
         like: 30,
         massenge: 'Lorem Ipsum - это текст-"рыба", ой" для текстов на латинице с начала XVI века.то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов',
        
    }
   ],
    placeholder: 'Напишите что-нибудь'
} 

const profile = (state = store, action) => {
    switch(action.type){
        case ADD_NEW_PLACE_HOLDER: {
          return  { ...state, placeholder : action.text
        }  
     } 
        case ADD_POST:{
            let newObj = {
                id: 12,
                avatarImg: "http://avilovdenis.pp.ua/img/2-mini-min.png",
                name: 'Никита',
                secondName: 'Авилов',
                title: 'Природа',
                imgPost: "https://img3.goodfon.ru/wallpaper/nbig/3/cb/freedom-svoboda-nadpis-pesok.jpg",
                like: 99,
                massenge: state.placeholder,
            }
        return{
            ...state,  
             post: [...state.post, newObj ],
             placeholder : "Напишите что еще!"    
        }  
    }        
        case SET_USERS:{         
            return{ ...state,
                profile : action.userID
            }
        }
     default:
         return state;
    }
 
   
}


export let addPlacholder = (text) => ({type : ADD_NEW_PLACE_HOLDER, text: text })
export let addPost = () =>( {type : ADD_POST} )
export let setUser = (userID) => ({type: SET_USERS, userID})
export default profile;
