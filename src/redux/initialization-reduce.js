import { getUsersData } from "./general";

const INITIALIZATION_SUCCESS = "INITIALIZATION-SUCCESS";

let initializationSuccess = {
    success: false
  }

 const initialization = ( state = initializationSuccess, action ) => {  

    
    switch(action.type){        
        case INITIALIZATION_SUCCESS: { 
       
             return{
               ...state,
               success: true 
             }
            } 
          default:
            return state;   
    }
}

 const is_initializationSuccess = ()=>({ type: INITIALIZATION_SUCCESS });

export default initialization;
export const is_initialization = () => (distpach) => { 
 
    let promise = distpach(getUsersData())
  
    Promise.all([promise]).then(
     () => distpach( is_initializationSuccess() )
    )  

   
  
}


