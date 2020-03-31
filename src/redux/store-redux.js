import { combineReducers, createStore, applyMiddleware } from "redux";
import profile from "./profile-reduce";
import myfriends from "./my-friends-reduce";
import friends from "./friends-reduce";
import general from "./general";
import  thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({
    profile: profile,
    myfriends: myfriends,
    friends: friends,
    general: general   
})
//создание объекта store и просежуточного слоя который умеет разделять функции и объекты
let store = createStore(reducers, applyMiddleware(thunkMiddleware) ); 
 window.store = store;
export default store;


 