 import React, { Component } from 'react';
//import Demo from './containers/demo';
import Idea from './containers/idea';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <div className="App-content">
        <Idea />
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  state
}))(App)
