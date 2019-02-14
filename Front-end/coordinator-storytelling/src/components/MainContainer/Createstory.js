import React from "react";
import axios from 'axios'
import './Home.css'


class Createstory extends React.Component{
    constructor(){
        super()
        this.state = {
            title: "",
            description: "",
            story: "",
            date: "",
            country: "",
            user_id: ""
          };




    }


    handleCreate = ev => {
        const userObject = {
            title: this.state.title,
            description: this.state.description,
            story: this.state.story,
            date: this.state.date,
            country: this.state.country,
            user_id: this.state.user_id
            
        }
        ev.preventDefault()
        axios
    .post("https://remarkable-story-backend.herokuapp.com/api/stories", userObject  )
    
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
         <div className='create_items'>
             <h2>Create Story</h2>
                  {/* <p style={{fontSize: '15px'}}> Name </p> */}
                  <input onChange={this.handleChange}
                  type="text"
                  name="title"
                  placeholder="Title"
                />
                <br></br>
                  <input onChange={this.handleChange}
                  type="text"
                  name="description"
                  placeholder="Description"
                />
                 <br></br>
                   <input onChange={this.handleChange}
                  type="text"
                  name="story"
                  placeholder="Story"
                />
                 <br></br>
                 <input onChange={this.handleChange}
                  type="text"
                  name="date"
                  placeholder="Date"
                />
                   <br></br>
                    <input onChange={this.handleChange}
                  type="text"
                  name="country"
                  placeholder="Country"
                />
                <br></br>
                <input onChange={this.handleChange}
                  type="text"
                  name="user_id"
                  placeholder="User ID"
                />
                 
                <br></br>
                <button onClick={this.handleCreate}>SUBMIT</button>
                
     
     
     
    
        
    
         </div>
    
        )
    
      }


}

export default Createstory