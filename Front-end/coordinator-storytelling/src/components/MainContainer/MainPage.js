import React, { Component } from 'react';
import Navigation from './Navigation'
import Content from './Content'

class MainPage extends Component {

  render() {
    return (
     <Navigation />,
     <Content />
    );
  }

}

export default MainPage;