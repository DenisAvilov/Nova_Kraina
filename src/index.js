import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store-redux';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';


export let renderState = (state) => {
    
    ReactDOM.render(< BrowserRouter > < App
     state={state}  dispatch={store.dispatch.bind(store)}   
    /> </ BrowserRouter>, document.getElementById('root'));
}

renderState(store.getState());

store.subscribe( ()=>{
    let state = store.getState()
    renderState(state)}
    )
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();




