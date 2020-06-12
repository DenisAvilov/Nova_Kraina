
import { getUsersData } from "./general";
import { interLiteralString } from "../types/LiteralFromString";
const INITIALIZATION_SUCCESS = "NOVA-KRAINA/INITIALIZATION-SUCCESS";
type SuccessType = {
    success: boolean
}
let initializationSuccess: SuccessType  = {
    success: false
  }
 const initialization = ( state = initializationSuccess, action: ActionType ) : SuccessType => {  

    
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

type ActionType = ReturnType<typeof is_initializationSuccess> 

const is_initializationSuccess = ()=>({ type:  interLiteralString(INITIALIZATION_SUCCESS) } as const);

export default initialization;


export const is_initialization = () => (distpach: any) => { 
 
    let promise = distpach( getUsersData() )
    Promise.all([promise]).then(
     () => distpach( is_initializationSuccess() )
    )  

   
  
}


