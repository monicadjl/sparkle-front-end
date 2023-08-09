import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BrowserRouter as Router, Route, Routes, Navigate, Switch } from 'react-router-dom';
import { auth } from '../index';
import App from '../App';
import HomePage from './HomePage';


function AuthControl() {
    const [user] = useAuthState(auth);

    return (
        <Routes>
            <Route
            path="/*"
            element={user ? <App /> : <HomePage />}
            />
        </Routes>
    );
};

export default AuthControl;
