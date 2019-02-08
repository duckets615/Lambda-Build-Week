import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import Content from './Content'
import About from './About'
import './Home.css'


class Navigation extends React.Component{
    handlePick(){
        document.getElementById("sidenav").style.width = "250px";
    
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
    closePick(){
        document.getElementById("sidenav").style.width = "0";
        console.log('clicked!')
    }
    render(){
 return(
     



<div>
    <nav>
        <span className="menu" onClick={this.handlePick}>MENU</span>
    <div id="sidenav"  className='sidenav'>
    <span className="closebtn" id='sidenav' onClick={this.closePick}>X</span>
        <NavLink exact to="/">
              Home
        </NavLink>
        <NavLink to="/about">
              About
        </NavLink>  
       
        <a href="submitstory.html">Submit Story</a>
        <a href="contact.html">Contact Us</a>
        </div>
    </nav>
    <a className="signup" href="signup.html">Sign Up/Log In</a>
    <Route exact path="/" component={Content} />
    <Route exact path="/about" component={About} />
</div>
   





 )
    }
}

export default Navigation;