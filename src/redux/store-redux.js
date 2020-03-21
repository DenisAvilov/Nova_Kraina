import { combineReducers, createStore } from "redux";
import profile from "./profile-reduce";
import myfriends from "./my-friends-reduce";
import friends from "./friends-reduce";

const reducers = combineReducers({
    profile: profile,
    myfriends: myfriends,
    friends: friends,  
})

let store = createStore(reducers);//создание объекта store
 window.store = store;
export default store;


 