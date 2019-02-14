import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { deleteStory, startUpdatingStory } from '../store/actions'

//import Logo from '../assets/stock-2.jpg'

const StoryContainer = styled.div`
    width: 100%;
    border: 1px solid lightgray;
    border-radius: 10px;
    img{
        width: 100%;
        height: auto;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    div{
        padding: 15px;
        h1{
            margin: 0;
        }
        h2{
            font-weight: 100;
        }
        p{
            font-size: 1.6rem;
            width: 65%;
            margin: 10px auto 20px auto;
            text-align: start;
            @media (max-width: 720px){
                width: 95%;
            }
        }
    }
    @media (max-width: 720px){
        margin-top: 20px;
    }
`;

const Btn = styled.button`
    cursor: pointer;
    font-size: 1.5rem;
    background-color: #C12E6A;
    border: 1px solid lightgray;
    text-decoration: none;
    padding: 10px 25px;
    margin: 0 5px;
    color: white;
    &:hover{
        transition: 0.2s;
        background-color: #8c1e4b;
    }
`;

const DonateBtn = styled.div`
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

class StoryPageView extends React.Component{
    state={
        singleStory:{
            title: '',
            country: '',
            story: '',
            description: '',
            id: ''
        }
    }


    componentDidMount(){
        axios.get(`https://remarkable-story-backend.herokuapp.com/api/stories/${this.props.match.params.id}`)
            .then(res => this.setState({singleStory:res.data[0]}))
            .catch(err => console.log(err))
    }

    render(){
        return(
            <StoryContainer>
                <img src={''} alt='' />
                <div>
                    <h1>{this.state.singleStory.title}</h1> 
                    <h2>{this.state.singleStory.country}</h2>
                    <p>{this.state.singleStory.story}</p>
                    {localStorage.getItem('userType') === 'coordinator' &&
                    <>
                        <Btn onClick={() => {
                            this.props.deleteStory(this.state.singleStory.id, localStorage.getItem('token'));
                            this.props.history.push('/')
                        }}>Delete</Btn>
                        <Btn onClick={() => {
                            this.props.startUpdatingStory(this.state.singleStory)
                            this.props.history.push('/create-story')
                        }}>Update</Btn>
                    </>
                    }
                    {localStorage.getItem('userType') === 'donator' &&
                        <DonateBtn>
                            <Link to='/add-donation'>Donate</Link>
                        </DonateBtn>
                    }
                </div>
            </StoryContainer>
        ) 
    }
}

const mapStateToProps = state => {
    return{
        token: state.authenticationReducer.token,
        userId: state.authenticationReducer.userId
    }
}

export default connect(
    mapStateToProps,
    {
        deleteStory,
        startUpdatingStory
    }
)(StoryPageView)