import React from 'react';

const SingleSparkle = ({ sparkle, onBack }) => {
    return (
        <div>
        <h2>{sparkle.title}</h2>
        <p>Date: {sparkle.date}</p>
        <p>Location: {sparkle.location}</p>
        <p>Entry: {sparkle.entry}</p>
        <button onClick={onBack}>Back to Sparkles List</button>
        </div>
    );
};

export default SingleSparkle;
