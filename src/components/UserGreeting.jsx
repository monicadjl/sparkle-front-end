import React, { useEffect, useState } from 'react';
import { auth } from '../index';
import './UserGreeting.css'

const UserGreeting = () => {
    const [displayName, setDisplayName] = useState('');

    useEffect(() => {
        const fetchDisplayName = () => {
        const currentUser = auth.currentUser;
        if (currentUser) {
            // User is signed in, so access the display name
            setDisplayName(currentUser.displayName || 'Guest'); // Use 'Guest' if the display name is not set
        } else {
            // User is not signed in, handle as desired (e.g., show "Guest" or redirect to login)
            setDisplayName('Guest');
        }
        };

        fetchDisplayName();
    }, []);

    return (
        <div className="greeting-container">
            <h1>Hello, {displayName}</h1>
        </div>
    );
};

export default UserGreeting;