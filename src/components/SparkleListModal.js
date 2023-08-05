import React from 'react';
import SparklesList from './SparklesList';

const SparklesListModal = ({ onClose }) => {

    

    return (
        <div className="modal">
        <div className="modal-content">
            <span className="close" onClick={onClose}>&times;</span>
            <SparklesList onClose={onClose} />
        </div>
        </div>
    );
};

export default SparklesListModal;