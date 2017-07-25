import React, { Component } from 'react';
import { connect } from 'react-redux';

import {getTracks} from './actions/tracks';
import Menu from './Menu';


class App extends Component {

    handleBtn(){
        console.log(this.textInput.value);
        this.props.onAddTrack(this.textInput.value);
        this.textInput.value = '';
    }

    findTrack(){
        console.log('findTrack', this.searchInput.value);
        this.props.onFindTrack(this.searchInput.value);
    }


  render() {
        console.log('testing', this.props.tracks); // testing

    return (
        <div>
            <div>
                <Menu/>
            </div>
            <div>
            <input type="text" ref={(input)=>{
                this.textInput = input
            }}/>
            <button
                onClick={this.handleBtn.bind(this)}>Add Track</button>
            </div>

            <div>
                <input type="text" ref={(input)=>{
                    this.searchInput = input
                }}/>
                <button
                    onClick={this.findTrack.bind(this)}>SEARCH</button>
            </div>
            <div>
                <button onClick={this.props.onGetTracks}>GET TRACKS</button>
            </div>
            <ul>
                {
                    this.props.tracks.map((item, index)=>{
                        return <li key={index}>{item.name}</li>
                    })
                }
            </ul>
        </div>
    );
  }
}

export default connect(
    state =>({ // mapping state to props
        // tracks: state.tracks
        tracks: state.tracks.filter(track => track.name.includes(state.filterTracks))
    }),
    dispatch => ({onAddTrack: (name) => {
        const payload = {
            id: Date.now().toString(),
            name: name
        };
        dispatch({type: 'ADD_TRACK', payload})
    },
        onFindTrack: (name) => {
            dispatch({type: 'FIND_TRACK', payload: name})
        },
        onGetTracks: () => {

        dispatch(getTracks())
        }
    })
)(App);
