import React, { useState } from 'react';
import { auth } from '../index';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import './SignUp.css'
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Set the display name for the user
            updateProfile(auth.currentUser, {
            displayName: displayName,
            })
            .then(() => {
                console.log('Display name set successfully!');
            })
            .catch((error) => {
                console.error('Error setting display name:', error);
            });
        })
        .catch((error) => {
            console.error('Error signing up:', error);
        });
    };

    return (
        <div className='sign-up-container'>
        <form className='signup-form' onSubmit={signUp}>
            <h1 className='sign-up-header'>Create an account</h1>
            <label>Email: </label>
            <input
            type='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password: </label>
            <input
            type='password'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <label>Display Name:</label>
            <input
            type='text'
            placeholder='Enter your display name'
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            />
            <button className='sign-up-button' type='submit'>Sign Up</button>
        </form>
        </div>
    );
};

export default SignUp;
