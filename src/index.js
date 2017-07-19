import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux'

function playList(state=[], action){
    if (action.type === 'ADD_TRACK'){
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}

const store = createStore(playList);


store.subscribe(()=> {
    console.log('subscribe', store.getState());
});

store.dispatch({type: 'ADD_TRACK', payload: 'some track 01'});



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));



//
// import { createStore } from 'redux';
//
// function playList(state=[], action){
//     if (action.type === 'ADD_TRACK'){
//         return [
//             ...state,
//             action.payload
//         ];
//     }
//     return state;
// }
//
// const store = createStore(playList);
//
//
// store.subscribe(()=> {
//     console.log('subscribe', store.getState());
// });
//
// store.dispatch({type: 'ADD_TRACK', payload: 'some track 01'});
// store.dispatch({type: 'ADD_TRACK', payload: 'some track 02'});
