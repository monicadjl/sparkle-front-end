import React, { useState, useEffect } from "react";
import './NewSparkleForm.css';
import { auth, db, firebase } from '../index'
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

const NewSparkleForm = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [entry, setEntry] = useState('');

    // //handles form submission
    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     //get authenticated user
    //     const currentUser = auth.currentUser;
    //     if (!currentUser) {
    //         console.error('User not authenticated.');
    //         return;
    //     };

    //     // create new sparkle object with user ID, title, date, location, and entry
    //     const newSparkle = {
    //         userId: currentUser.uid,
    //         title: title,
    //         date: date,
    //         location: location,
    //         entry: entry,
    //     };

    //     //ref to firestore collection for sparkles
    //     const sparklesRef = Firestore.collection('sparkles');
    //     //const sparklesRef = db.collection('sparkles');

    //     // add the new sparkle to firestore
    //     sparklesRef
    //         .add(newSparkle)
    //         .then(() => {
    //             console.log('Sparkle logged successfully!');
    //             //clear form after submission
    //             setTitle('');
    //             setDate('');
    //             setLocation('');
    //             setEntry('');
    //         })
    //         .catch((error) => {
    //             console.error('Error logging sparkle:', error);
    //         });
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        //get authenticated user
        const currentUser = auth.currentUser;
        if (!currentUser) {
            console.error('User not authenticated.');
            return;
        }
    
        // create new sparkle object with user ID, title, date, location, and entry
        const newSparkle = {
            userId: currentUser.uid,
            title: title,
            date: date,
            location: location,
            entry: entry,
            timestamp: serverTimestamp(), // Add server timestamp to the sparkle data
        };
    
        // get Firestore instance
        const firestore = getFirestore();
    
        // ref to firestore collection for sparkles
        const sparklesRef = collection(firestore, 'users', currentUser.uid, 'sparkles');

    
        // add the new sparkle to firestore
        try {
            await addDoc(sparklesRef, newSparkle);
            console.log('Sparkle logged successfully!');
            // clear form after submission
            setTitle('');
            setDate('');
            setLocation('');
            setEntry('');
        } catch (error) {
            console.error('Error logging sparkle:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Title:
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Date:
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Location:
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Entry:
                    <textarea
                        value={entry}
                        onChange={(e) => setEntry(e.target.value)}
                        required
                    />
                </label>
            </div>
            <button type="submit">Log Sparkle</button>
        </form>
    );
};

export default NewSparkleForm;

