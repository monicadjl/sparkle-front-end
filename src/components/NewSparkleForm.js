import React, { useState } from "react";
import './NewSparkleForm.css';
import { auth, db, firebase } from '../index';
import { getFirestore, collection, doc, addDoc, serverTimestamp } from 'firebase/firestore';

const NewSparkleForm = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [entry, setEntry] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Get authenticated user
        const currentUser = auth.currentUser;
        if (!currentUser) {
            console.error('User not authenticated.');
            return;
        }

        // Create new sparkle object with user ID, title, date, location, and entry
        const newSparkle = {
            title: title,
            date: date,
            location: location,
            entry: entry,
            timestamp: serverTimestamp(), // Add server timestamp to the sparkle data
        };

        // Get Firestore instance
        const firestore = getFirestore();

        // Reference to the "sparkles" subcollection under the user's document
        const sparklesRef = collection(doc(firestore, 'users', currentUser.uid), 'sparkles');

        // Add the new sparkle as a new document in the "sparkles" subcollection
        try {
            await addDoc(sparklesRef, newSparkle);
            console.log('Sparkle logged successfully!');
            // Clear form after submission
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

