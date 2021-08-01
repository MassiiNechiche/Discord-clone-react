import React from 'react';
import './login.css';
import { Button } from '@material-ui/core';
import  { auth, provider } from './firebase';

function Login() {

    const signIn = () =>{
        // Google login 
        auth.signInWithPopup(provider).catch(error => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img alt='' src="https://www.actugaming.net/wp-content/uploads/2021/03/discord.jpg"/>
            </div>

            <Button onClick={signIn}>Sign in</Button>
        </div>
    )
}

export default Login
