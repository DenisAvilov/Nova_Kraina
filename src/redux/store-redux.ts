import { type } from 'os';

import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import profile from "./profile-reduce";
import friends from "./friends-reduce";
import general from "./general";
import  thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import initialization from "./initialization-reduce";



const RootReducer = combineReducers({
    profile: profile,
    friends: friends,
    general: general,
    initialization: initialization,
    form: formReducer  
})

// return type store
export type RootReducerType = ReturnType<typeof RootReducer>

//создание объекта store и просежуточного слоя который умеет разделять функции и объекты
// let store = createStore(RootReducer, applyMiddleware(thunkMiddleware) ); 

 //@ts-ignore
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 //@ts-ignore
 const store = createStore(RootReducer, composeEnhancers(  compose(
    applyMiddleware(thunkMiddleware)
  ))) 
  export default store





 