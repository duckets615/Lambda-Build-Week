import React from 'react';
import styled from 'styled-components'

const Login = styled.form`
    width: 300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    text-align: start;
    h2{
        margin: 0 0 5px 0;
        font-weight: 400;
    }
    input,select,button{
        margin-bottom: 15px;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid lightgray;
    }
    button{
        font-size: 1.6rem;
        font-weight: 500;
        background-color: #FBA423;
        color: white;
        &:hover{
            transition: 0.2s;
            cursor: pointer;
            background-color: #C12E6A;
        }
    }
`;

const LoginForm = props => {
    return(
        <Login onSubmit={props.loginUser}>
            <h2>Username:</h2>
            <input 
                type="text" 
                name="username" 
                value={props.loginInfo.username}
                onChange={props.handleLoginChange}
                required
            />
            <h2>Password:</h2>
            <input 
                type="password" 
                name="password" 
                value={props.loginInfo.password}
                onChange={props.handleLoginChange}
                required
            />
            <button type="submit">Login</button>
        </Login>
    )
}

export default LoginForm