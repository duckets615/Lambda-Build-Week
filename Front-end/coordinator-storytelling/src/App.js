import React, { Component } from 'react';
import './App.css';
import Authenticate from './components/authentication/authenticate';
import MainPage from './components/MainContainer/MainPage'
import axios from "axios";



class App extends Component {
  constructor() {
    super();
    this.state = {
      country: '' 
    };
  }

  componentDidMount(){
    axios
      .get("https://story2api.herokuapp.com/countries")
      .then(res =>
        this.setState(
          {
            country: res.data,
            message: res.statusText
          },
          () => console.log(this.state.country)
        )
      )
      .catch(err =>
        this.setState({
          error: err
        })
      );
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