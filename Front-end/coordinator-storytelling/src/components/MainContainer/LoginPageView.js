import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { login } from '../store/actions'

import LoginForm from './LoginForm';

const FormContainer = styled.div`
    width: 350px;
    margin: 0 auto;
    padding: 15px;
    border: 1px solid lightgray;
    border-radius: 10px;
    h2{
        font-weight: 100;
        a{
            font-weight: 600;
            text-decoration: none;
        }
    }
`;

class LoginPageView extends React.Component{
    state = {
        loginInfo:{
            username: '',
            password: ''
        }
    }

    handleLoginChange = e => {
        this.setState({
            loginInfo:{
                ...this.state.loginInfo,
                [e.target.name]: e.target.value
            }
        })
    }

    loginUser = e => {
        e.preventDefault();
        this.props.login(this.state.loginInfo)
        this.setState({
            loginInfo:{
                username: '',
                password: ''
            }
        });
        this.props.history.push('/')
    }

    render(){
        return(
            <FormContainer>
                <h1>Login</h1>
                <LoginForm
                    loginInfo={this.state.loginInfo}
                    handleLoginChange={this.handleLoginChange}
                    loginUser={this.loginUser}
                />
                <h2> Don't have an account? <Link to="/sign-up">Sign Up</Link> </h2>
            </FormContainer>
        )
    }
}

const mapStateToProps = state => {
    return{

    }
}

export default connect(
    mapStateToProps,
    {
        login
    }
)(LoginPageView)