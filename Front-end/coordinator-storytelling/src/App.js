import React, { Component } from 'react';
import { Route } from 'react-router';
import styled from 'styled-components';

import Navigation from './components/MainContainer/Navigation'
import HomePageView from './components/MainContainer/HomePageView';
import MyStoryView from './components/MainContainer/MyStoryView';
//import DonationsView from './views/DonationsView';
//import AddDonationView from './views/AddDonationView';
import LoginPageView from './components/MainContainer/LoginPageView';
import SignUpView from './components/MainContainer/SignUpView';
import CreateStoryView from './components/MainContainer/CreateStoryView';
import StoryPageView from './components/MainContainer/StoryPageView';

//import './App.css';

const PageContentContainer = styled.div`
  width: 1100px;
  margin: 15px auto;
  text-align: center;
  @media (max-width: 1100px){
    width: 95%;
  }
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageContentContainer>
          <Route path='/' component={Navigation}/>
          <Route exact path='/' component={HomePageView}/>
          <Route path='/my-stories' component={MyStoryView}/>
          {/* <Route path='/donations' component={DonationsView}/> */}
          <Route path='/login' component={LoginPageView}/>
          <Route path='/sign-up' component={SignUpView}/>
          <Route path='/create-story' component={CreateStoryView}/>
          {/* <Route path='/add-donation' component={AddDonationView}/> */}
          <Route path='/story/:id' component={StoryPageView}/>
        </PageContentContainer>
      </div>
    );
  }
}

export default App;
