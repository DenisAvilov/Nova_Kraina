
import { getUsersData } from './general'
import { interLiteralString } from '../types/LiteralFromString'
import { ActionsTypes } from './store-redux'
const INITIALIZATION_SUCCESS = 'NOVA-KRAINA/INITIALIZATION-SUCCESS'

let initialSuccess = {
    success: false
  }

const actions = {
  is_initializationSuccess : () => ({ type:  interLiteralString(INITIALIZATION_SUCCESS) } as const)
}

 const initialization = ( state = initialSuccess, action: ActionType ): SuccessType => {     
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

export default initialization;

export const is_initialization = () => (distpach:any) => {  
    let promise = distpach( getUsersData() )
    Promise.all([promise]).then(
     () => distpach( actions.is_initializationSuccess() )
    )    
}


type SuccessType = typeof initialSuccess
type ActionType = ActionsTypes<typeof actions>