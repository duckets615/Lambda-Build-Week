import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';

import Content from './Content'
import About from './About'
import '../../CSS/home.css'
import Signup from './Signup';
import Login from './Login';


class Navigation extends React.Component{
    openHandler(){
        document.getElementById("sidenav").style.width = "250px";
    }
    closeHandler(){
        document.getElementById("sidenav").style.width = "0";
        console.log('clicked!')
    }
    render(){
        return(
            <div>
              <header>
                <nav>
                    <span className="menu" onClick={this.openHandler}>MENU</span>
                    <div id="sidenav"  className='sidenav'>
                        <span className="closebtn" id='sidenav' onClick={this.closeHandler}>X</span>
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
                < Link to='/signup' className="sign" >Sign Up</Link>
                < Link to='/login' className="signin" >Log In</Link>
              </header>
                <Route path="/signup" component={Signup} />
                <Route exact path="/" component={Content} />
                <Route path="/about" component={About} />
                <Route path="/login" component={Login} />
            </div>
            )
        }
}

export default Navigation;