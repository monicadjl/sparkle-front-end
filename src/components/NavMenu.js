import React, { useState } from "react";
import NewSparkleModal from "./NewSparkleModal";
import SparklesListModal from "./SparkleListModal";
import './NavMenu.css'
import { auth, firebase } from '../index'
import { useNavigate, Link } from 'react-router-dom'


const NavMenu = ({ onNewSparkleClick }) => {
    const [showNewSparkleModal, setShowNewSparkleModal] = useState(false);
    const [showSparkleListModal, setShowSparkleListModal] = useState(false);
    const navigate = useNavigate();

    const handleOpenNewSparkleModal = () => {
        setShowNewSparkleModal(true);
    };

    const handleCloseNewSparkleModal = () => {
        setShowNewSparkleModal(false);
    };

    const handleOpenSparkleListModal = () => {
        setShowSparkleListModal(true);
    };

    const handleCloseSparkleListModal = () => {
        setShowSparkleListModal(false);
    };

    const handleLogout = async () => {
        try {
            const currentUser = auth.currentUser; // Get the current authenticated user
            if (currentUser) {
                console.log(`User ${currentUser.email} is signing out.`); // Log the user's email
            }
    
            await auth.signOut(); // Sign the user out

            // navigate("/"); // Navigate back to the homepage
        } catch (error) {
            console.error("Error logging out:", error);
        }
    }

    return (
        <nav className='container'>
            <ul>
                <li>
                    <button className='button' onClick={handleOpenNewSparkleModal}>New Sparkle</button>
                </li>
                <li>
                    <button className='button' onClick={handleOpenSparkleListModal}>Sparkle List</button>
                </li>
                <li>
                    <Link to='/' className='button' onClick={handleLogout}>Logout</Link>
                </li>
            </ul>
        
            {showNewSparkleModal && <NewSparkleModal onClose={handleCloseNewSparkleModal} />}
            {showSparkleListModal && <SparklesListModal onClose={handleCloseSparkleListModal} />}
            </nav>
        );
    };

export default NavMenu;
