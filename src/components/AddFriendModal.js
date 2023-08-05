import React, { useState } from 'react';

const AddFriendModal = ({ isOpen, onClose }) => {
    const [searchInput, setSearchInput] = useState('');

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Add logic for handling the friend search here
        onClose(); // Close the modal after search or other actions
    };

    if (!isOpen) return null;

    return (
        <div>
        <h2>Add Friend</h2>
        <form onSubmit={handleSearchSubmit}>
            <label>
            Search Friend:
            <input type="text" value={searchInput} onChange={handleSearchInputChange} required />
            </label>
            <button type="submit">Search</button>
        </form>
        <button onClick={onClose}>Close</button>
        </div>
    );
};

export default AddFriendModal;
