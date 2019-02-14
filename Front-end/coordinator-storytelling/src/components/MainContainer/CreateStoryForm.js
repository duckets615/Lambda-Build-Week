import React from 'react';
import styled from 'styled-components';

const CreateStory = styled.form`
    width: 300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    text-align: start;
    h2{
        margin: 0 0 5px 0;
        font-weight: 400;
    }
    input,select,button{
        margin-bottom: 15px;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid lightgray;
    }
    button{
        font-size: 1.6rem;
        font-weight: 500;
        background-color: #FBA423;
        color: white;
        &:hover{
            transition: 0.2s;
            cursor: pointer;
            background-color: #C12E6A;
        }
    }
`;

const CreateStoryForm = props => {
    console.log('createstoryform',props)
    return(
        <CreateStory onSubmit={props.isUpdating ? props.updateStory : props.submitStory}>
            <h2>Title:</h2>
            <input 
                type="text" 
                name="title" 
                value={props.storyInfo.title}
                onChange={props.handleStoryChange}
                required
            />
            <h2>Description:</h2>
            <input 
                type="text" 
                name="description" 
                value={props.storyInfo.description}
                onChange={props.handleStoryChange}
                required
            />
            <h2>Story:</h2>
            <input 
                type="text" 
                name="story" 
                value={props.storyInfo.story}
                onChange={props.handleStoryChange}
                required
            />
            <h2>Country:</h2>
            <select 
                name="country" 
                value={props.storyInfo.country} 
                onChange={props.handleStoryChange}
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
            <button type="submit">{props.isUpdating ? 'Update Story' : 'Create Story'}</button>
        </CreateStory>
    )
}

export default CreateStoryForm  