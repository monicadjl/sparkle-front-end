import React, { useState } from 'react';
import NewSparkleForm from './NewSparkleForm';
import './NewSparkleModal.css'
import ReactModal from 'react-modal';


const NewSparkleModal = ({ onClose }) => {
    return (
        <ReactModal
            isOpen={true} // Control the visibility of the modal
            onRequestClose={onClose} // Function to close the modal
            className="modal-content" // Apply your styling here
            overlayClassName="modal-overlay" // Apply overlay styling here
            >
            <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                {/* Render the NewSparkleForm */}
                <NewSparkleForm onClose={onClose} />
            </div>
            </div>
        </ReactModal>
    );
};

export default NewSparkleModal;
