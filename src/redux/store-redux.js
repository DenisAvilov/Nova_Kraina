import { combineReducers, createStore } from "redux";
import profile from "./profile-reduce";
import myfriends from "./my-friends-reduce";

const reducers = combineReducers({
    profile: profile,
    myfriends: myfriends 
})

let store = createStore(reducers);//создание объекта store
export default store;


 