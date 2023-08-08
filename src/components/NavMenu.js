import React, { useState } from "react";
import NewSparkleModal from "./NewSparkleModal";
import SparklesListModal from "./SparkleListModal";
import './NavMenu.css'

const NavMenu = ({ onNewSparkleClick }) => {
    const [showNewSparkleModal, setShowNewSparkleModal] = useState(false);
    const [showSparkleListModal, setShowSparkleListModal] = useState(false);

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


    return (
        <nav className='container'>
            <ul>
                <li>
                    <button className='button' onClick={handleOpenNewSparkleModal}>New Sparkle</button>
                </li>
                <li>
                    <button className='button' onClick={handleOpenSparkleListModal}>Sparkle List</button>
                </li>
            </ul>
        
            {showNewSparkleModal && <NewSparkleModal onClose={handleCloseNewSparkleModal} />}
            {showSparkleListModal && <SparklesListModal onClose={handleCloseSparkleListModal} />}
            </nav>
        );
    };

export default NavMenu;
