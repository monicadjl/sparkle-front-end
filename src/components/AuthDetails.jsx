// writes the logic which checks a user is signed in or not &b which user it is 
import React, { useEffect, useState } from "react";
import { auth } from "../index";
import { onAuthStateChanged, signOut } from "firebase/auth";

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null)

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null);
            }
        });
            return () => {
                listen();
            }
    }, []);

        const userSignOut = () => {
            signOut(auth).then (() => {
                console.log('sign out successful')
            }).catch(error => console.log(error))
        }

    return (
        <div>
            {authUser ? <><p>{`Signed In as ${authUser.email}`}</p> <button onClick={userSignOut}>Sign Out</button></> : <p>Signed out</p>}
        </div>
    );
};

export default AuthDetails;