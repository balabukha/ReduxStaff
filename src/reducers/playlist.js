
const initialState = [
    'playlist 01',
    'playlist 02'
];



export default function playList(state=initialState, action)
{ // reducer function that takes prev state and return a new one
    if (action.type === 'ADD_PLAYLIST'){
        return state;
    } else if ( action.type === 'DELETE_PLAYLIST') {
        return state;
    }
    return state;
};