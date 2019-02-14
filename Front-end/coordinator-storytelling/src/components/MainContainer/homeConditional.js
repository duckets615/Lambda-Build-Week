import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//import LoadingGif from '../../assets/loading.gif';

const Loading = styled.img`
    width: 65px;
    height: 65px;
    margin: 0 auto;
`;

const Header = styled.h1`
    font-weight: 100;
    a{
        text-decoration: none
    }
`;

const homeConditional = HomeContent => props => {
    if(props.loggedIn){
        return <HomeContent 
            stories={props.stories}
            isUpdating={props.isUpdating}
        />
    }
    console.log(props.isLoggingIn)
    return (
        props.isLoggingIn ?
        <Loading src={''} alt="Logging In..."/>:
        <Header><Link to="/login">Login to view stories</Link></Header>
    )
}

export default homeConditional