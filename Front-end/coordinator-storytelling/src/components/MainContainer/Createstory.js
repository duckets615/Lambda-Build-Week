import React from "react";
//import axios from 'axios'
import './Home.css'


const Createstory = (props) => {
    
    return(
         <div className='create_stories'>
             <h2>Create Story</h2>
                  {/* <p style={{fontSize: '15px'}}> Name </p> */}
                  <p>Title:</p>
                  <input onChange={props.handleChange}
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={props.story.title}
                />
                <br></br>
                  <p style={{marginLeft:'1px'}}>Description:</p>
                  <input onChange={props.handleChange}
                  type="text"
                  name="description"
                  placeholder="Description"
                  value={props.story.description}
                />
                 <br></br>
                  <p>Story:</p>
                  <input onChange={props.handleChange}
                  type="text"
                  name="story"
                  placeholder="Story"
                  value={props.story.story}
                />
                <br></br>
                  <p style={{marginLeft:'1px'}}>Country:</p>
                <select 
                name="country" 
                value={props.story.country} 
                onChange={props.handleChange}
                required
            >
                <option> Please select a Country</option>
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
                <button className='createbutton' onClick={ (ev) => props.isUpdating ? props.updateStory(ev) : props.createStory(ev) }>SUBMIT</button>
                
     
     
     
    
        
    
         </div>
    
        )
    
      }

export default Createstory