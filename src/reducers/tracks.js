
const initialState = [];



export default function tracks(state=initialState, action){ // reducer function that takes prev state and return a new one
    if (action.type === 'ADD_TRACK'){
        return [
            ...state, action.payload
        ];
    } else if ( action.type === 'FETCH_TRACKS_SUCCESS') {
        return action.payload
    }
    return state;
};