import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import Content from './Content'
import About from './About'

const Navigation = () => {
 return(
<div className='navigation'>
    <nav>
        <NavLink exact to="/">
              Home
        </NavLink>
        <NavLink to="/about">
              About
        </NavLink>   
       
        <a href="submitstory.html">Submit Story</a>
        <a href="contact.html">Contact Us</a>
    </nav>
    <a class="signup" href="signup.html">Sign Up/Log In</a>
    <Route exact path="/" component={Content} />
    <Route exact path="/about" component={About} />

</div>


 )

}

export default Navigation;