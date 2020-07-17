import { type } from 'os';

import { combineReducers, createStore, applyMiddleware, compose, Action } from "redux";
import profile from "./profile-reduce";
import friends from "./friends-reduce";
import general from "./general";
import  thunkMiddleware, { ThunkAction } from 'redux-thunk'  // this a sanka, function которая что то делает
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

// определяем объект типа для BaseActionsTypes с указанием ограничений, тип должен быть обектом и возвращять функцию
export type ActionsTypes<T> =  T extends {[key: string]:(...args: any[]) => infer U} ? U : never

//Базовый тип для Thank Action Creator A наследует базой Асtion из Redux, R по умолчанию возвращает Promis 
export type BaseActionType<A extends Action , R = Promise<void>> = ThunkAction<R , RootReducerType, unknown, A>

//создание объекта store и просежуточного слоя который умеет разделять функции и объекты
// let store = createStore(RootReducer, applyMiddleware(thunkMiddleware) ); 

 //@ts-ignore
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 const store = createStore(RootReducer, composeEnhancers(  compose(
    applyMiddleware(thunkMiddleware)
  ))) 
//@ts-ignore
  window.store = store
  export default store





 