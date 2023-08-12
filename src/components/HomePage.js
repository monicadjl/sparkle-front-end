import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import AuthDetails from "./AuthDetails";
import './HomePage.css'


const HomePage = () => {
    return (
        <div className='home-container' id='hello-user'>
            <h1 className="sparkle">Sparkle</h1>
            <span>
                <SignIn />
                <SignUp />
            </span>
        </div>
    );
};

export default HomePage;