import React, { Component } from 'react';


class App extends Component {

    handleBtn(){
        console.log(this.textInput.value);
        this.textInput.value = '';
    }
  render() {
    return (
        <div>
            <input type="text" ref={(input)=>{
                this.textInput = input
            }}/>
            <button
                onClick={this.handleBtn.bind(this)}>Add Track</button>
            <ul></ul>
        </div>
    );
  }
}

export default App;
