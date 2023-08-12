import React from 'react';
import './SingleSparkle.css'
const SingleSparkle = ({ sparkle, onBack }) => {
    return (
        <div className='container-sparkle'>
        <h2>{sparkle.title}</h2>
        <p className='date'>Date: {sparkle.date}</p>
        <p className='location'>Location: {sparkle.location}</p>
        <p className='entry'>Today's Sparkling Moment: {sparkle.entry}</p>
        <button onClick={onBack}>Back to Sparkles List ✨</button>
        </div>
    );
};

export default SingleSparkle;
