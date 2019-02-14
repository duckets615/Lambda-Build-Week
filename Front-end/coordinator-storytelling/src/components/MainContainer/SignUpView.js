import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';

import { signUp } from '../store/actions'

import SignUpForm from './SignUpForm'

const FormContainer = styled.div`
    width: 350px;
    margin: 0 auto;
    padding: 15px;
    border: 1px solid lightgray;
    border-radius: 10px;
`;

class SignUpView extends React.Component{
    state = {
        userInfo: {
            username: '',
            password: '',
            email: '',
            country: '',
            title: '',
        }
    }

    handleSignUpChange = e => {
        this.setState({
            userInfo: {
                ...this.state.userInfo,
                [e.target.name]: e.target.value
            }
        })
    }

    signUpUser = e => {
        this.props.signUp(this.state.userInfo)
        e.preventDefault();
        this.setState({
            userInfo: {
                username: '',
                password: '',
                email: '',
                country: '',
                title: '',
            }
        });
        this.props.history.push('/login')
    }

    render(){
        return(
            <FormContainer>
                <h1>Sign Up</h1>
                <SignUpForm 
                    signUpUser={this.signUpUser}
                    handleSignUpChange={this.handleSignUpChange}
                    userInfo={this.state.userInfo}
                /> 
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
        signUp
    }
)(SignUpView);