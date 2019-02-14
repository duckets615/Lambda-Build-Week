import React from 'react';
import styled from 'styled-components';

const SignUp = styled.form`
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

const SignUpForm = props => {
    return(
        <SignUp onSubmit={props.signUpUser}>
                    <h2>Username:</h2>
                    <input 
                        type="text" 
                        name="username" 
                        value={props.userInfo.username}
                        onChange={props.handleSignUpChange}
                        required
                    />
                    <h2>Password:</h2>
                    <input 
                        type="password" 
                        name="password" 
                        value={props.userInfo.password}
                        onChange={props.handleSignUpChange}
                        required
                    />
                    <h2>Email:</h2>
                    <input 
                        type="text" 
                        name="email" 
                        value={props.userInfo.email}
                        onChange={props.handleSignUpChange}
                        required
                    />
                    <h2>Country:</h2>
                    <select 
                        name="country" 
                        value={props.userInfo.country} 
                        onChange={props.handleSignUpChange}
                        required
                    >
                        <option value>select an option</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Bolvia">Bolvia</option>
                        <option value="Cambodia">Cambodia</option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Haiti">Haiti</option>
                        <option value="Honduras">Honduras</option>
                        <option value="Kiribati">Kiribati</option>
                        <option value="Madagascar">Madagascar</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Philippines">Philippines</option>
                        <option value="Sierra Leone">Sierra Leone</option>
                        <option value="Zimbabwe">Zimbabwe</option>
                    </select>
                    <h2>Organization Title:</h2>
                    <select 
                        type="text" 
                        name="title" 
                        value={props.userInfo.title}
                        onChange={props.handleSignUpChange}
                        required
                    >
                        <option value>select an option</option>
                        <option value="donator">Donator</option>
                        <option value="coordinator">Co-ordinator</option>
                    </select>
                    <button type="submit">Sign Up</button>
                </SignUp>
    )
}

export default SignUpForm;