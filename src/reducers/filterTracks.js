
const initialState = [];



export default function filterTracks(state=initialState, action){ // reducer function that takes prev state and return a new one
    if (action.type === 'FIND_TRACK'){
        return action.payload
    }
    return state;
};