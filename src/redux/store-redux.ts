import { type } from 'os';

import { combineReducers, createStore, applyMiddleware } from "redux";
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

let test : RootReducerType

//создание объекта store и просежуточного слоя который умеет разделять функции и объекты
let store = createStore(RootReducer, applyMiddleware(thunkMiddleware) ); 

declare global {
    interface Window {
        store:any;
    }
}

 window.store = store


export default store;


 