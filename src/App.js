import React from 'react';
import './App.css';
import NavMenu from './components/NavMenu'; // Import the NavMenu component;
import UserGreeting from './components/UserGreeting';
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import HomePage from './components/HomePage'


function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <UserGreeting />
        </header>

        <main className="main-content">
          <NavMenu /> {/* Displayed vertically on the left */}
          
          <div className="page-content">
            {/* Routes */}
            <Routes>
              <Route path="/HomePage" element={<HomePage />} />
              {/* Define other routes here */}
            </Routes>
          </div>
        </main>

        <footer>{/* Footer content */}</footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
