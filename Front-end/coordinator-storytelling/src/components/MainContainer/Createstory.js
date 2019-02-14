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


   
    
      handleChange = ev => {
        this.setState({ [ev.target.name]: ev.target.value })
    
    }

    createStory = ev => {
        ev.preventDefault()
        const userObject = {
            title: this.state.title,
            description: this.state.description,
            story: this.state.story,
            date: this.state.date,
            country: this.state.country,
            user_id: this.state.user_id
            
        }
        
        this.setState({
            title: '',
            description: '',
            story: '',
            date: '',
            country: '',
            user_id: ''
        }
        
    )
    this.props.handleCreate(userObject)
        

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
                  value={this.state.title}
                />
                <br></br>
                  <input onChange={this.handleChange}
                  type="text"
                  name="description"
                  placeholder="Description"
                  value={this.state.description}
                />
                 <br></br>
                   <input onChange={this.handleChange}
                  type="text"
                  name="story"
                  placeholder="Story"
                  value={this.state.story}
                />
                 <br></br>
                 <input onChange={this.handleChange}
                  type="text"
                  name="date"
                  placeholder="Date"
                  value={this.state.date}
                />
                   <br></br>
                    <input onChange={this.handleChange}
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={this.state.country}
                />
                <br></br>
                <input onChange={this.handleChange}
                  type="text"
                  name="user_id"
                  placeholder="User ID"
                  value={this.state.user_id}
                />
                 
                <br></br>
                <button onClick={this.createStory}>SUBMIT</button>
                
     
     
     
    
        
    
         </div>
    
        )
    
      }


}

export default Createstory