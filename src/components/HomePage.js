import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import AuthDetails from "./AuthDetails";
import './HomePage.css'


const HomePage = () => {
    return (
        <div className='home-container'>
            <h1 className="sparkle">Sparkle</h1>
            <SignIn />
            <SignUp />
            <AuthDetails />
        </div>
    );
};

export default HomePage;