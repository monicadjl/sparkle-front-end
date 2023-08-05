import React from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AuthDetails from "./components/AuthDetails";


const HomePage = () => {
    return (
        <div className='container'>
            <h1>Sparkle</h1>
            <SignIn />
            <SignUp />
            <AuthDetails />
        </div>
    );
};

export default HomePage;