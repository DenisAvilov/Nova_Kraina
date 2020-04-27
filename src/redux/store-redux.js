import { combineReducers, createStore, applyMiddleware } from "redux";
import profile from "./profile-reduce";
import myfriends from "./my-friends-reduce";
import friends from "./friends-reduce";
import general from "./general";
import  thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import initialization from "./initialization-reduce";


const reducers = combineReducers({
    profile: profile,
    myfriends: myfriends,
    friends: friends,
    general: general,
    initialization: initialization,
    form: formReducer  
})
//создание объекта store и просежуточного слоя который умеет разделять функции и объекты
let store = createStore(reducers, applyMiddleware(thunkMiddleware) ); 
 window.store = store;
export default store;


 