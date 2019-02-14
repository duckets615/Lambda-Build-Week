import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import StoryContainer from './StoryContainer';

const StoryBtn = styled.div`
    display: flex;
    justify-content: center;
    a{
        display: flex;
        font-size: 1.5rem;
        background-color: #C12E6A;
        text-decoration: none;
        padding: 10px 25px;
        color: white;
        &:hover{
            transition: 0.2s;
            background-color: #8c1e4b;
        }
    }
`;

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 50px;
    margin: 10px auto 15px auto;
    border: 1px solid lightgrey;
    border-radius: 2px;
    font-size: 0.9rem;
    h1{
        font-weight: 100;
    }
    @media (max-width: 720px){
        flex-direction: column;
        height: unset;
        margin-top: 20px;
    }
`;

const HomeContent = props => {
    console.log('tst', props)
    return(
        <>
            <UserInfo>
                <h1>Username: {localStorage.getItem('userName')}</h1>
                <h1>Organization Title: {localStorage.getItem('userType')}</h1>
                <h1>Country: {localStorage.getItem('country')}</h1>
            </UserInfo>
            {localStorage.getItem('userType') === 'coordinator' ?
            <StoryBtn>
                <Link to="/create-story">{props.isUpdating ? 'Update Story' : 'Create Your Story'}</Link>
            </StoryBtn> :
            <StoryBtn>
                <Link to="/add-donation">Donate</Link>
            </StoryBtn>
            }
            <StoryContainer stories={props.stories}/>
        </>
    )
}

export default HomeContent;