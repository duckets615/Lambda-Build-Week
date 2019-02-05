import React, { Component } from 'react';
import './App.css';
import Authenticate from './components/authentication/authenticate';
import MainPage from './components/MainContainer/MainPage'

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className='App'>
        <MainPage />
      </div>
    );
  }
}

export default App;