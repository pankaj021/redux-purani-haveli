import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import reducer from './reducers';
import * as actions from './actions/index.js'
import './index.css'

const store = createStore(reducer);
store.dispatch(actions.loadingHaveliData())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();




























// import {createStore,combineReducers} from 'redux';

// const userReducer = function (state = {},action){
//     switch(action.type){
//         case "CHANGE_NAME" : 
//             state = {...state, name : action.payload};
//             break;
//         case "CHANGE_AGE" :
//             state = {...state, age : action.payload};
//             break;
//         default : 
//             state = {}
//     }
//     return state
// }

// const tweetReducer = function (state = [],action){
//     return state
// }

// const reducers = combineReducers({
//     user : userReducer,
//     tweets : tweetReducer
// })

// const store = createStore(reducers)

// store.subscribe(()=>{
//     console.log("store changed",store.getState())
// })

// store.dispatch({type : "CHANGE_NAME", payload : "PANKAJ"});
// store.dispatch({type : "CHANGE_AGE", payload : 22});
