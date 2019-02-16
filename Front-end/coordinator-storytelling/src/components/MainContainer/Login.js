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
	   <div className="loginform">
		   <h2>Log In</h2>
			 <p style={{marginLeft:'1px'}}>Username:</p>
				<input onChange={this.handleChange}
				type="text"
				name="username"
				placeholder="Username"
			  />
			   <br></br>
				<p style={{marginLeft:'1px'}}>Password:</p>
				<input onChange={this.handleChange}
				type="password"
				name="password"
				placeholder="Password"
			  />
			  <br></br>
			  <button className='loginbutton' onClick={this.handleLogin}>SUBMIT</button>
    </div>
  
	   )
  
	}
	
}
  
  export default Login