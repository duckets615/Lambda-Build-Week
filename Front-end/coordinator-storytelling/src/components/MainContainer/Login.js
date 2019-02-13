import React from 'react'
import axios from 'axios'

class Login extends React.Component {
	constructor(props) {
	  super(props);
  
	  this.state = {
		  user: {
			  username: "",
			  password: "",
			  
			},
		  loggedIn: false
	   
	  };
	  // this.handleChange = this.handleChange.bind(this);
  }
  
  
  handleLogin = ev => {
	  const userObject = this.state.user
	  ev.preventDefault()
	  axios
  .post("https://remarkable-story-backend.herokuapp.com/api/login", userObject  )
  
  .then(res => {
	  //console.log(res.data)
	  localStorage.setItem("token", res.data.token);
	  this.setState({ loggedIn: true });
	})
	.catch(err => console.log(err));
  }
  
	handleChange = ev => {
	  this.setState({ [ev.target.name]: ev.target.value })
  
  }
  
	render(){
	  return(
	   <div>
		   <h2>Sign Up</h2>
				{/* <p style={{fontSize: '15px'}}> Name </p> */}
				<input onChange={this.handleChange}
				type="text"
				name="username"
				placeholder="Name"
			  />
			   <br></br>
				   <input onChange={this.handleChange}
				type="text"
				name="password"
				placeholder="Password"
			  />
			  <br></br>
			  <button onClick={this.handleLogin}>SUBMIT</button>
   
   
   
  
  
  
	   </div>
  
	  )
  
	}
	
  }
  
  export default Login