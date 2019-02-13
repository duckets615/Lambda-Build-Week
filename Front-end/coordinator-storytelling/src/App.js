import React, { Component } from 'react';
//import './App.css';
import Authenticate from './components/authentication/authenticate';
import MainPage from './components/MainContainer/MainPage'
import axios from "axios";



class App extends Component {
  constructor() {
    super();
    this.state = {
      stories: []
    };
  }

  componentDidMount(){
    let auth = {
      headers: {
        authorization: localStorage.getItem("token")
      }
    };
    //make axios call for get, but this same process will work for delete, put, and post
    axios
      .get("https://remarkable-story-backend.herokuapp.com/api/stories", auth)
      .then(res => {
        console.log(res.data);
        this.setState({ stories: res.data });
      })
      .catch(err => console.log(err));
  };









  render() {
    return (
  
      <div className='App'>
      <Authenticate />
        <MainPage />
        
      </div>
   
    );
  }
}

export default App;