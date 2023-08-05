import React, { useState } from 'react';
import { auth } from '../index';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

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
        <form onSubmit={signUp}>
            <h1 className='sign-up-header'>Create an account</h1>
            <input
            type='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <input
            type='password'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            {/* Add a display name input field */}
            <input
            type='text'
            placeholder='Enter your display name'
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            />
            <button type='submit'>Sign Up</button>
        </form>
        </div>
    );
};

export default SignUp;
