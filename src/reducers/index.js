import {combineReducers} from 'redux';

import tracks from './tracks';
import playList from './playlist';
import filterTracks from './filterTracks';


export default combineReducers({
    tracks,
    playList,
    filterTracks
});