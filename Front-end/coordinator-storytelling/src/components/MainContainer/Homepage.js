import React from "react";
import axios from 'axios'

import Createstory from './Createstory'
import Deletestory from './Deletestory'

class Homepage extends React.Component{
    constructor(){
        super()
        this.state = {
            stories: []
          };




    }


    componentDidMount(){
        let auth = {
          headers: {
            authorization: localStorage.getItem("token")
          }
        };
        //make axios call for get, but this same process will work for delete, put, and post
        axios
          .get("https://remarkable-story-backend.herokuapp.com/api/stories", auth)
          .then(res => {
            console.log(res.data);
            this.setState({ stories: res.data });
          })
          .catch(err => console.log(err));
      };

      deleteStories = id => {
        let auth = {
            headers: {
              authorization: localStorage.getItem("token")
            }
          };
        axios
          .delete(`https://remarkable-story-backend.herokuapp.com/api/stories/${id}`, auth)
          .then(res => {
            this.setState(
              {
                stories: res.data
              },
            );
          })
          .catch(res => {
            this.setState({
                 stories: res.data
            });
          });
      };

      handleCreate = userObject => {
        axios
    .post("https://remarkable-story-backend.herokuapp.com/api/stories", userObject  )
    
    .then(res => {
        console.log('data',res.data)
        
        this.setState({ stories: res.data });
        	
      })
      .catch(err => console.log(err));
      
    }



    render(){
        return(

            <div className='main_items'>
              {this.state.stories.map(story => (
              <div className='items'>
                <p>{story.title}</p>
                <p>{story.description}</p>
                <p>{story.story}</p>
                <p>{story.country}</p>
                <Deletestory deleteStories={this.deleteStories} 
                id={story.id}
                />
              </div>
            ))}
            
            <Createstory handleCreate={this.handleCreate}  />
        
            </div>

        )
    }




}

export default Homepage