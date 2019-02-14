import React from 'react';
import { connect } from 'react-redux';

import { fetchStories } from '../store/actions';

import HomeContent from './HomeContent';
import homeConditional from './homeConditional';

class HomePageView extends React.Component{
    componentDidMount(){
        this.props.fetchStories()
    }

    render(){
        return(
            <>
                <ConditionalView 
                    loggedIn={localStorage.getItem('loggedIn')} 
                    userType={localStorage.getItem('userType')}
                    isLoggingIn={this.props.isLoggingIn}
                    stories={this.props.stories}
                    isUpdating={this.props.isUpdating}
                />
            </>
        )
    }
}

const ConditionalView = homeConditional(HomeContent)

const mapStateToProps = state => {
    return{
        stories: state.storyReducer.stories,
        isUpdating: state.storyReducer.isUpdatingStory,
        isLoggingIn: state.authenticationReducer.isLoggingIn
    }
}

export default connect(
    mapStateToProps,
    {
        fetchStories
    }
)(HomePageView)