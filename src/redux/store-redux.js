import { combineReducers, createStore } from "redux";
import profile from "./profile-reduce";

const reducers = combineReducers({
    profile: profile
})

let store = createStore(reducers);//создание объекта store
export default store;


