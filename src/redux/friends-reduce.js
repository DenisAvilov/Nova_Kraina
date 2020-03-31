import { usersApi } from "../api/Api";

const ADD_FRIEND  = "ADD-FRIEND";
const DEL_FRIEND  = "DEL-FRIEND";
const SET_USERS_FRIENDS   = "SET-USERS-FRIENDS";
const TRACKING_BUTTON   = "TRACKING-BUTTON";

let iniliset = {
    users: [       
    ], 
    usersTracking : [],
    tracking: null
  } 

const  friends = (state = iniliset, action ) => {  
    
    switch(action.type){        
        case ADD_FRIEND: {  
       
              return {
                  ...state,
                users: state.users.map(u =>  {
                    if(u.id === action.userId){ return{...u, followed: true}}
                    return u; 
                })
                }
            }
        case DEL_FRIEND:{
         
            return {
                ...state,
              users: state.users.map(u =>  {
                  if(u.id === action.userId){
                       return{...u, followed: false}
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
        case TRACKING_BUTTON: {
          
          return{
            ...state, usersTracking : action.followed
            ? [ ...state.usersTracking, action.usersId ]
            : state.usersTracking.filter(id => id != action.usersId)
          }
        }
          default:
            return state;   
    }
}

export const add_Friend = (userId)=>({ type: ADD_FRIEND, userId });
export const del_Friend = (userId) => ({type: DEL_FRIEND, userId });
export const setUsersFriends  = ( users ) => ({type: SET_USERS_FRIENDS, users});  
export const stateTrackingButton = (usersId, followed) => ({type: TRACKING_BUTTON, usersId, followed})
export default friends;

export const getUsersThunkCreator = () => {
  //возвращаю  санки
          return (dispatch) => {            
              usersApi.usersGet()
              .then(data => {           
                dispatch( setUsersFriends(data) )
              })
            }  
}
export const friendFollow = (userID) => {
  //возвращаю  санки
          return (dispatch) => {  

            dispatch( stateTrackingButton(userID,  true) )
                    
            usersApi.follow(userID).then(    (resultCode) => {
         
           if(resultCode === 0){

            dispatch( add_Friend(userID)  ) }

          dispatch(stateTrackingButton(userID,  false) )
         })
            }  
}
export const friendUnFollow = (userID) => {
  //возвращаю  санки
          return (dispatch) => {  

            dispatch( stateTrackingButton(userID,  true) )
                    
            usersApi.unfollow(userID).then(    (resultCode) => {
         
           if(resultCode === 0){

            dispatch( del_Friend(userID)  ) }

          dispatch(stateTrackingButton(userID,  false) )
         }) 
            }  
}