import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import About from './About'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {Router, Route, hashHistory } from 'react-router';

import reducer from './reducers'
import { syncHistoryWithStore } from 'react-router-redux';

let history = syncHistoryWithStore(hashHistory, store);

// const initialState = {
//     tracks:  [
//         'track 01',
//         'track 02',
//     ],
//     playlists: [
//         'playlist 01',
//         'playlist 02'
//     ]
// };

// function playList(state=initialState, action){ // reducer function that takes prev state and return a new one
//     if (action.type === 'ADD_TRACK'){
//         return {
//             ...state,
//             tracks: [...state.tracks, action.payload]
//         }
//         // [
//         //     ...state.tracks,
//         //     action.payload
//         // ];
//     }
//     return state;
// }

// const store = createStore(playList);
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));


store.subscribe(()=> {
    console.log('subscribe', store.getState());
});




ReactDOM.render(
    <div>
    <Provider store={store}>
        {/*<Router history={hashHistory}>*/}
        <Router history={history}>
            <Route path="/" component={App} />
            <Route path="/about" component={About} />
        </Router>
        {/*<App />*/}
    </Provider>
    </div>
    , document.getElementById('root')
);



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
