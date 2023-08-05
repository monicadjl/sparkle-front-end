import React, { useState } from 'react';
import './App.css';
import NavMenu from './components/NavMenu'; // Import the NavMenu component
import NewSparkleModal from './components/NewSparkleModal';
import HomePage from './HomePage';
import UserGreeting from './components/UserGreeting';


function App() {
  // const [showNewSparkleModal, setShowNewSparkleModal] = useState(false);
  // const [showSparkleListModal, setShowSparkleListModal] = useState(false);

  // const handleOpenNewSparkleModal = () => {
  //   setShowNewSparkleModal(true);
  // };

  // const handleCloseNewSparkleModal = () => {
  //   setShowNewSparkleModal(false);
  // };

  // const handleOpenSparkleListModal = () => {
  //   setShowSparkleListModal(true);
  // };

  // const handleCloseSparkleListModal = () => {
  //   setShowSparkleListModal(false);
  // };

  return (
    <div className="App">
      {/* Pass the event handlers to NavMenu */}
      <UserGreeting />
      <NavMenu />
      <HomePage />
      
    
    </div>
  );
}

export default App;
