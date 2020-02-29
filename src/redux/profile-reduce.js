const  ADD_POST = 'ADD-POST';
const ADD_NEW_PLACE_HOLDER = "ADD-NEW-PLACE-HOLDER";

export let actionPlacholder = (text) => ({type : 'ADD-NEW-PLACE-HOLDER', text: text })
export let actionAddPost = () =>({type : 'ADD-POST'})
let store =  {
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
} 

const profile = (state = store, action) => {
    switch(action.type){
        case ADD_NEW_PLACE_HOLDER:
          state.placeholder = action.text
          return state;
        case ADD_POST:
            let newObj = {
                        id: 12,
                        avatarImg: "http://avilovdenis.pp.ua/img/2-mini-min.png",
                        name: 'Никита',
                        secondName: 'Авилов',
                        title: 'Природа',
                        imgPost: "https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg",
                        like: 30,
                        massenge: state.placeholder,
                    }    
            state.post.push(newObj);
            state.placeholder = "Напишите что еще!";
     return state;
     default:
         return state;
    }
    return state;
   
}

export default profile;

// if( action.type === ADD_POST ){       
    //     let newObj = {
    //         id: 12,
    //         avatarImg: "http://avilovdenis.pp.ua/img/2-mini-min.png",
    //         name: 'Никита',
    //         secondName: 'Авилов',
    //         title: 'Природа',
    //         imgPost: "https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg",
    //         like: 30,
    //         massenge: this._state.profile.placeholder,
    //     }    
    //    this._state.profile.post.push(newObj);
    //    this._state.profile.placeholder = "Напишите что еще!";
    //    this._subscriber(this._state);
    //  } else if( action.type === ADD_NEW_PLACE_HOLDER ){
    //     this._state.profile.placeholder = action.text
    //     this._subscriber(this._state);
    //  }