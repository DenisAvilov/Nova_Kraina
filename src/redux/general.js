const TO_COME_IN  = "TO-COME-IN";
const IS_OPEN = "OPEN";
const IS_CLOSE = "CLOSE";

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
               id: action.id.id,
               email: action.id.email,
               login: action.id.login,
               isYou: true

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
          default:
            return state;   
    }
}

export const to_came_in = (id, email, login)=>({ type: TO_COME_IN,  id, email, login });
export const is_open = () => ({ type: IS_OPEN });
export const is_close = () => ({ type: IS_CLOSE });


export default general;