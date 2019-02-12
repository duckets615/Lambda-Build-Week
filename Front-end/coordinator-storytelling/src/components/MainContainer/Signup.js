import React from "react";
import axios from 'axios'

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        user: {
            'job-title': '',
            'country_name': '',
            email: "",
            username: "",
            password: "",
            
          }
     
    };
    // this.handleChange = this.handleChange.bind(this);
}


handleRegister = ev => {
    const userObject = this.state.user
    ev.preventDefault()
    axios
.post("https://story2api.herokuapp.com/register", userObject  )
.then(res =>
//   this.setState(
//     {
//       username: res.data,
//       message: res.statusText
//     },
//     () => console.log(this.state.country)
//   )
// )

console.log(res)
)
.catch(err =>
  this.setState({
    error: err
  })
 )
}

  handleChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value })

}

  render(){
    return(
     <div>
         <h2>Sign Up</h2>
              <input onChange={this.handleChange}
              type="text"
              name="username"
              placeholder="Name"
            />
            <br></br>
              <input onChange={this.handleChange}
              type="text"
              name="job-title"
              placeholder="JobTitle"
            />
             <br></br>
               <input onChange={this.handleChange}
              type="text"
              name="country_name"
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
              type="text"
              name="username"
              placeholder="Username"
            />
             <br></br>
                 <input onChange={this.handleChange}
              type="text"
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