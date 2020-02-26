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
            {
                id: 1,
                avatarImg: "https://www.pngkey.com/png/detail/47-474070_child-avatar-icon-flat-design-red-yellow-coffee.png",
                name: 'Илья',
                secondName: 'Авилов',
                title: 'Львовское метро',
                imgPost: "https://icocnews.ru/wp-content/uploads/2015/09/priroda.jpg",
                like: 35,
                massenge: 'Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов',
            },
            {
                id: 2,
                avatarImg: "https://png.pngtree.com/png-clipart/20190619/original/pngtree-vector-female-avatar-icon-png-image_4017527.jpg",
                name: 'Оля',
                secondName: 'Авилова',
                title: 'Подсолники',
                imgPost: "https://static2.gazeta.ua/img2/cache/gallery/923/923596_1_w_570.jpg?v=0",
                like: 35,
                massenge: 'Новая статья про подсолнухи',
            }],
            placeholder: 'Напишите что-нибудь'
        }
    },
    getState(){
        return this._state;
    },
    _subscriber(){
     
    },
    addNewPlaceholder(e){
       debugger; 
       this._state.profile.placeholder = e
       this._subscriber(this._state);
    },
    addPost(){
        debugger;
        let newObj = {
            id: 12,
            avatarImg: "http://avilovdenis.pp.ua/img/2-mini-min.png",
            name: 'Никита',
            secondName: 'Авилов',
            title: 'Природа',
            imgPost: "https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg",
            like: 30,
            massenge: this._state.profile.placeholder,
        }
    
       this._state.profile.post.push(newObj);
       this._state.profile.placeholder = "Напишите что еще!";
       this._subscriber(this._state);
    },  
    _crossdressing(listener){
       this._subscriber = listener;
    }
 }

export default store;