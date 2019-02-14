import React from "react";
import axios from 'axios'

import Createstory from './Createstory'


class Homepage extends React.Component{
    constructor(){
        super()
        this.state = {
            stories: [],
            id: ''
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
        axios
          .delete(`https://remarkable-story-backend.herokuapp.com/api/stories/${id}`)
          .then(res => {
            this.setState(
              {
                message: res.statusText
              },
              () => this.getData()
            );
          })
          .catch(err => {
            this.setState({
              message: err.statusText
            });
          });
      };

       



    render(){
        return(

            <div className='main_items'>
              {this.state.stories.map(story => (
              <div className='items'>
                <p>{story.title}</p>
                <p>{story.description}</p>
                <p>{story.story}</p>
                <p>{story.country}</p>
                <button onClick={() => this.deleteStories(this.state.id)} className="btn delete"name="modify">
                            Delete
                 </button>
              </div>
            ))}
            <Createstory  />
        
            </div>

        )
    }




}

export default Homepage