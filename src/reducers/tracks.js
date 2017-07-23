
const initialState = [];



export default function tracks(state=initialState, action){ // reducer function that takes prev state and return a new one
    if (action.type === 'ADD_TRACK'){
        return [
            ...state, action.payload
        ];
    } else if ( action.type === 'DELETE_TRACK') {
        return state
    }
    return state;
};