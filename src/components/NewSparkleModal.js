import React, { useState } from 'react';
import NewSparkleForm from './NewSparkleForm';

const NewSparkleModal = ({ onClose }) => {
    return (
        <div className="modal">
        <div className="modal-content">
            <span className="close" onClick={onClose}>&times;</span>
            {/* Render the NewSparkleForm */}
            <NewSparkleForm onClose={onClose} />
        </div>
        </div>
    );
};

export default NewSparkleModal;
