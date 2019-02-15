import React from "react";
//import axios from 'axios'
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
         <div className='create_stories'>
             <h2>Create Story</h2>
                  {/* <p style={{fontSize: '15px'}}> Name </p> */}
                  <p>Title:</p>
                  <input onChange={this.handleChange}
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={this.state.title}
                />
                <br></br>
                  <p style={{marginLeft:'52px'}}>Description:</p>
                  <input onChange={this.handleChange}
                  type="text"
                  name="description"
                  placeholder="Description"
                  value={this.state.description}
                />
                 <br></br>
                  <p>Story:</p>
                  <input onChange={this.handleChange}
                  type="text"
                  name="story"
                  placeholder="Story"
                  value={this.state.story}
                />
                <br></br>
                  <p style={{marginLeft:'22px'}}>Country:</p>
                <select 
                name="country" 
                value={this.state.country} 
                onChange={this.handleChange}
                required
            >
                <option value="Brazil">Brazil</option>
                <option value="Bolvia">Bolvia</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Ecuador">Ecuador</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Ghana">Ghana</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Haiti">Haiti</option>
                <option value="Honduras">Honduras</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Zimbabwe">Zimbabwe</option>
            </select>

            
             
                 
                <br></br>
                <button onClick={this.createStory}>SUBMIT</button>
                
     
     
     
    
        
    
         </div>
    
        )
    
      }


}

export default Createstory