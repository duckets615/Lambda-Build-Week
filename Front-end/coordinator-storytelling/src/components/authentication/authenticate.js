import React from 'react'
// import Login from '../MainContainer/Login.js'
import MainPage from '../MainContainer/MainPage'
//import axios from "axios";

const Authenticate = App => {
  return class extends React.Component {
    constructor(){
      super()
      this.state = {
        country: '' 
      }
    }
    // componentDidMount(){
    //   axios
    //     .get("https://story2api.herokuapp.com/country")
    //     .then(res =>
    //       this.setState(
    //         {
    //           country: res.data,
    //           message: res.statusText
    //         },
    //         () => console.log(this.state.country)
    //       )
    //     )
    //     .catch(err =>
    //       this.setState({
    //         error: err
    //       })
    //     );
    // };
    changeLogIn = e => {
    	const loggedIn = {login: true}
    	this.setState({ login: loggedIn })
    }
   
    render() {
      return(
      
        <div>
          
        </div>
      )
    }
  }
}

export default Authenticate;