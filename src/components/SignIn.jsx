import React, { useState} from 'react';
import { app, db, auth } from '../index'
import { signInWithEmailAndPassword } from 'firebase/auth';
import './SignIn.css'
const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
        })
        .catch((error) => {
            console.log(error)
        })
    }



    return (
    <div className='sign-in-container'>
        <form className='signin-form'onSubmit={signIn}>
            <h1 className='log-in-header'>
                Log In
            </h1>

            <label>Email: </label>
            <input type='email' placeholder='Enter your email' value={email}
            onChange={e => setEmail(e.target.value)}>
            </input>

            <label>Password: </label>
            <input type='password' placeholder='Enter your password' value={password}
            onChange={e => setPassword(e.target.value)}>
            </input>
            <button className="log-in-button" type='submit'> Log In</button>
        </form>
    </div>
    )
};

export default SignIn;
