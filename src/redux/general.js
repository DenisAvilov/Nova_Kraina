import { usersApi, authApi } from "../api/Api";
import { stopSubmit } from "redux-form";

const TO_COME_IN  = "TO-COME-IN";
const IS_OPEN = "OPEN";
const IS_CLOSE = "CLOSE";
const LOGIN_IN = "LOGIN-IN";

let iniliset = {
      id: null,
      email: null,
      login: null,
      isYou: false,
      isOpen: false,
  }

const general = (state = iniliset, action ) => {  

    
    switch(action.type){        
        case TO_COME_IN: {            
             return{
               ...state,
               id: action.id,
               email: action.email,
               login: action.login,
               isYou: action.isYou

             }
            } 
         case IS_OPEN: {
           return{
             ...state,             
            isOpen: state.isOpen = true
           }
         }  
         case IS_CLOSE: {
           return{
             ...state,
             isOpen: state.isOpen = false
           }
         } 
         case LOGIN_IN: {
           return{
             ...state,

           }
         }       
          default:
            return state;   
    }
}

export const to_came_in = (email, id, login, isYou)=>({ type: TO_COME_IN, email, id, login, isYou });

export const is_open = () => ({ type: IS_OPEN });
export const is_close = () => ({ type: IS_CLOSE });

export const getUsersData = () => (distpach) => {
  usersApi.authApi()
        .then( (response) => {
            if(response.data.resultCode === 0){
              distpach( to_came_in(  response.data.data.email, response.data.data.id, response.data.data.login, true ) )
            }
        } )
  
}


export const is_login = (email, password, rememberMe = false) => distpach => {
  authApi.authLogin(email, password, rememberMe).then( response => {   
    if(response.data.resultCode === 0){
      authApi.authMe().then( response => {       
         distpach(to_came_in( response.data.data.email, response.data.data.id, response.data.data.login, true))
      } )
    }
    else{      
          //диспатчим общую ошибку с сервера 
      distpach(stopSubmit("loginField", {_error: response.data.messages}));
    }
  })
}

export const is_logOut = () => distpach => {
  authApi.authDelete().then( response => {   
 
    if(response.data.resultCode === 0){            
         distpach(to_came_in( null, null,  null,  false ))      
    }
    
  })
}

export default general;