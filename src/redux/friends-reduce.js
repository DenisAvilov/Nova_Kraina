const ADD_FRIEND  = "ADD-FRIEND";
const DEL_FRIEND  = "DEL-FRIEND";
const SET_USERS_FRIENDS   = "SET-USERS-FRIENDS";

let iniliset = {
    users: [       
    ]
  }

const friends = (state = iniliset, action ) => {  

    
    switch(action.type){        
        case ADD_FRIEND: {        
              return {
                  ...state,
                users: state.users.map(u =>  {
                    if(u.id === action.userId){ return{...u, followed: false}}
                    return u; 
                })
                }
            }
        case DEL_FRIEND:{
            return {
                ...state,
              users: state.users.map(u =>  {
                  if(u.id === action.userId){
                       return{...u, followed: true}
                  }
                  return u; })
              }
            }
        case SET_USERS_FRIENDS:{
                 
                     return {
                           ...state, 
                         users:  action.users.items

                      } 
                    }
          default:
            return state;   
    }
}

export const add_Friend = (userId)=>({ type: ADD_FRIEND, userId });
export const del_Friend = (userId) => ({type: DEL_FRIEND, userId });
export const setUsersFriends  = ( users ) => ({type: SET_USERS_FRIENDS, users});  

export default friends;