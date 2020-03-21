import profile from "./profile-reduce";
import myfriends from "./my-friends-reduce";



//  const  ADD_POST = 'ADD-POST';
//  const ADD_NEW_PLACE_HOLDER = "ADD-NEW-PLACE-HOLDER";
 
// export let actionPlacholder = (text) => ({type : 'ADD-NEW-PLACE-HOLDER', text: text })
// export let actionAddPost = () =>({type : 'ADD-POST'})

 let store = {
    _state: { 
        profile: {
            user: [{
                id: 0,
                name: 'Илья',
                second_Name: 'Авилов',
                bg_logo: "https://www.dswiss.com/assets/components/phpthumbof/cache/Office_PC1.27be4b79db61149d2ae0a950ea0d216f.jpg",
                get bg_logo_alt() {
                    return this.name + " " + this.second_Name;
                },
                user_avatar: "http://avilovdenis.pp.ua/img/2-mini-min.png",
                get user_avtar_alt() {
                    return this.name + " " + this.second_Name;
                }
            }],
            briefInformation: [{
                id: 0,
                h1: 'Краткая информация',
                studied: 'National Aerospace University – Kharkov Aviation Institute',
                lives: 'Харьков',
                from: 'Харьков'
            }],
            post: [{
                id: 0,
                avatarImg: "http://avilovdenis.pp.ua/img/2-mini-min.png",
                name: 'Никита',
                secondName: 'Авилов',
                title: 'Природа',
                imgPost: "https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg",
                like: 30,
                massenge: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов',
            },
          ],
            placeholder: 'Напишите что-нибудь'
        },
        myfriends: {
            user:[{
                id:1,
                img: 'https://www.w3schools.com/w3css/img_avatar3.png',
                name: 'Юля', 
                serName: 'Журавка'
            },
            {
                id:2,
                img: 'https://www.w3schools.com/w3css/img_avatar3.png',
                name: 'Никита', 
                serName: 'Авилов'
    
            },
            {
                id:3,
                img: 'https://www.w3schools.com/w3css/img_avatar3.png',
                name: 'Илья', 
                serName: 'Авилов'
            },
            {
                id:4,
                img: 'https://www.w3schools.com/w3css/img_avatar3.png',
                name: 'Артем', 
                serName: 'Журавка'
            }]
        }
    },
    subscribe(listener){
        this._subscriber = listener;
     },
     _subscriber(){
     
    },
    getState(){
        return this._state;
    },
    dispatch(action){ //{type : 'ADD-POST'} 
   
    this._state.profile = profile ( this._state.profile, action); 
    this._state.myfriends =  myfriends(this._state.myfriends)
    // this._subscriber(this._state);
     
    },
    
}

export default store;