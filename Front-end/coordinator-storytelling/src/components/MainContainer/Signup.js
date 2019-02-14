import React from "react";
import axios from 'axios'

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      country: '',
      email: "",
      username: "",
      password: "",
      loggedIn: false
      
         
     
    };
    // this.handleChange = this.handleChange.bind(this);
}


handleRegister = ev => {
    const userObject = {
      title: this.state.title,
      country: this.state.country,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    }
    ev.preventDefault()
    axios
.post("https://remarkable-story-backend.herokuapp.com/api/register", userObject  )

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
              name="title"
              placeholder="JobTitle"
            />
             <br></br>
               <input onChange={this.handleChange}
              type="text"
              name="country"
              placeholder="Country Name"
            />
             <br></br>
                <input onChange={this.handleChange}
              type="text"
              name="email"
              placeholder="Email"
            />
             <br></br>
                 <input onChange={this.handleChange}
              type="password"
              name="password"
              placeholder="Password"
            />
            <br></br>
            <button onClick={this.handleRegister}>SUBMIT</button>
 
 
 



     </div>

    )

  }
  
}

export default Signup