const SET_USERS = "SET-USERS";

let initialization = {    
        users:[
       //      {
        //  id:1,
        //   img: 'https://www.w3schools.com/w3css/img_avatar3.png',
      //      name: 'Юля', 
      //    serName: 'Журавка'
       //  },
        // {
        //     id:2,
        //     img: 'https://www.w3schools.com/w3css/img_avatar3.png',
        //     name: 'Никита', 
        //     serName: 'Авилов'

        // },
        // {
        //     id:3,
        //     img: 'https://www.w3schools.com/w3css/img_avatar3.png',
        //     name: 'Илья', 
        //     serName: 'Авилов'
        // },
        // {
        //     id:4,
        //     img: 'https://www.w3schools.com/w3css/img_avatar3.png',
        //     name: 'Артем', 
        //     serName: 'Журавка'
        // }
    ]
}

const myfriends = (state = initialization, action ) =>{

    switch(action.type) {

        case SET_USERS:{  
                 
       return {...state,
        users : action.users
    }
};
       default:
         return  state;
      
    }


}

export let setUsers = (users) => ( {type: SET_USERS, users} ); 

export default myfriends;