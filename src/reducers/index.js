import {combineReducers} from 'redux';

import tracks from './tracks';
import playList from './playlist';

export default combineReducers({
    tracks,
    playList
});