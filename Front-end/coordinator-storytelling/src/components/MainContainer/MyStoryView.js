import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchMyStories } from '../store/actions';

import StoryContainer from './StoryContainer';
//import LoadingGif from '../assets/loading.gif';

const Header = styled.h1`
    font-weight: 100;
    a{
        text-decoration: none
    }
`;

const Loading = styled.img`
    width: 65px;
    height: 65px;
    margin: 0 auto;
`;


class MyStoryView extends React.Component{
    componentDidMount(){
        this.props.fetchMyStories(localStorage.getItem('token'), localStorage.getItem('userId'))
    }

    render(){
        return(
            localStorage.getItem('userType') === 'coordinator' ?
            <>
                <Header>My Stories</Header>
                {this.props.myStories.length > 0 ? 
                <>
                <StoryContainer stories={this.props.myStories}/>
                </> :
                this.props.isFetchingMyStories ?
                <Loading src={''} alt="Loading Your Stories..."/> :
                <h2>You have no stories... <Link to="/create-story">Create one?</Link></h2>
                }
            </>:
            <Header>This page is only for Co-Ordinators</Header>
        )
    }
}

const mapStateToProps = state => {
    return{
        myStories: state.storyReducer.myStories,
        isUpdating: state.storyReducer.isUpdatingStory,
        isFetchingMyStories: state.storyReducer.isFetchingMyStories
    }
}

export default connect(
    mapStateToProps,
    {
        fetchMyStories
    }
)(MyStoryView);