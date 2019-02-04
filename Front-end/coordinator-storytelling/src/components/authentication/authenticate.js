import React from 'react'
import Login from '../Login/Login.js'
import MainPage from '../MainContainer/MainPage'


const Authenticate = App => {
  return class extends React.Component {
    constructor(){
      super()
      this.state = {
        login: false
      }
    }

    changeLogIn = e => {
    	const loggedIn = {login: true}
    	this.setState({ login: loggedIn })
    }
   
    render() {
      return(
      	this.state.login 
      			? <MainPage /> 
      			: <Login 
      				loggingInInsta = {this.changeLogIn} />
      )
    }
  }
}

export default Authenticate;