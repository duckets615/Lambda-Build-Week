import React from 'react'
import axios from 'axios'

class Login extends React.Component {
	constructor(props) {
	  super(props);
  
	  this.state = {
			username: "",
			password: "",
			loggedIn: false
	   
	  };
	  // this.handleChange = this.handleChange.bind(this);
  }
  
  
  handleLogin = ev => {
	  const userObject = {
        username: this.state.username,
        password: this.state.password

		}
	  ev.preventDefault()
	  axios
  .post("https://remarkable-story-backend.herokuapp.com/api/login", userObject  )
  
  .then(res => {
		console.log(res.data)
	  localStorage.setItem("token", res.data.token);
		this.setState({ loggedIn: true });
		this.props.history.push('/homepage')		
	})
	.catch(err => console.log(err));
  }
  
	handleChange = ev => {
	  this.setState({ [ev.target.name]: ev.target.value })
  
  }
  
	render(){
	  return(
	   <div>
		   <h2>Log In</h2>
				{/* <p style={{fontSize: '15px'}}> Name </p> */}
				<input onChange={this.handleChange}
				type="text"
				name="username"
				placeholder="Name"
			  />
			   <br></br>
				<input onChange={this.handleChange}
				type="password"
				name="password"
				placeholder="password"
			  />
			  <br></br>
			  <button onClick={this.handleLogin}>SUBMIT</button>
   
   
   
  

  
  
	   </div>
  
	  )
  
	}
	
  }
  
  export default Login