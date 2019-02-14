import React, { Component } from 'react';
//import './App.css';
import Authenticate from './components/authentication/authenticate';
import MainPage from './components/MainContainer/MainPage'
import axios from "axios";
import { Route, NavLink, Link } from 'react-router-dom';
import Homepage from './components/MainContainer/Homepage'




class App extends Component {
  constructor() {
    super();
    this.state = {
      stories: []
    };
  }


  render() {
    return (
  
      <div className='App'>
      <Authenticate />
        <MainPage />
        <Route exact path="/homepage" component={Homepage} />
      </div>
   
    );
  }
}

export default App;