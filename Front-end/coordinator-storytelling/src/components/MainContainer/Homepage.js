import React from "react";
import axios from 'axios'

import Createstory from './Createstory'
import Deletestory from './Deletestory'
import Updatestory from './Updatestory'


class Homepage extends React.Component{
    constructor(){
        super()
        this.state = {
            stories: [],
            story: {
                title: "",
                description: "",
                story: "",
                date: "",
                country: "",
                user_id: ""
            },

            isUpdating: false
          
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
    
    updateStories = ev => {
        ev.preventDefault()
        let auth = {
            headers: {
              authorization: localStorage.getItem("token")
            }
          };
        axios
          .put(`https://remarkable-story-backend.herokuapp.com/api/stories/${this.state.story.id}`, this.state.story, auth)
          .then(res => {
              console.log('homepage',res)
            this.setState(
              {
                stories: res.data,
                isUpdating: false,
                story: {
                    title: "",
                    description: "",
                    story: "",
                    date: "",
                    country: "",
                    user_id: ""
                }
              },
            );
          })
          .catch(res => {
            this.setState({
                 stories: res.data
            });
          });
      };
    
    editStory = id => {
        const storyToedit = this.state.stories.find(story => id === story.id)
        console.log('homepage',storyToedit)
        this.setState({
            story: storyToedit,
            isUpdating: true
        })
    }

    handleChange = ev => {
        this.setState({ story:{ ...this.state.story, [ev.target.name]: ev.target.value } })
    
    }

    createStory = ev => {
        ev.preventDefault()
        this.setState({
            story:{
                title: '',
                description: '',
                story: '',
                date: '',
                country: '',
                user_id: ''
            }  
        }

        
    )
    this.handleCreate(this.state.story)
      console.log(this.state.story)  
    
    }

    




    render(){
        return(
        <div>
        <div className='main_items'>
             {/* <div className='list_items'> */}
                {this.state.stories.map(story => (
              <div className='items'>
                <p>Title: {story.title} </p>
                <p> Description: {story.description} </p>
                <p> Story: {story.story}</p>
                <p> Country: {story.country}</p>
                <Deletestory deleteStories={this.deleteStories} 
                id={story.id}
                />
                <Updatestory editStory={this.editStory}
                             id={story.id}/>
              </div>
            //  </div>
            ))}
            
               
        
        </div>
        <Createstory 
                         handleChange={this.handleChange}
                         createStory={this.createStory}
                         story={this.state.story}
                         isUpdating={this.state.isUpdating}
                         updateStory={this.updateStories}/>
        </div>

        )
    }




}

export default Homepage