import React, { Component } from 'react';
import { connect } from 'react-redux';


class App extends Component {

    handleBtn(){
        console.log(this.textInput.value);
        this.textInput.value = '';
    }


  render() {
        console.log('testing', this.props.testStore); // testing

    return (
        <div>
            <input type="text" ref={(input)=>{
                this.textInput = input
            }}/>
            <button
                onClick={this.handleBtn.bind(this)}>Add Track</button>
            <ul>
                {
                    this.props.testStore.map((item, index)=>{
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    );
  }
}

export default connect(
    state =>({ // mapping state to props
        testStore: state
    }),
    dispatch => ({})
)(App);
