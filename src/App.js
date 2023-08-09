import React from 'react';
import './App.css';
import NavMenu from './components/NavMenu'; // Import the NavMenu component;
import UserGreeting from './components/UserGreeting';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './components/HomePage'


function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
      </Routes>
        
        <header>
          <UserGreeting />
        </header>

        <main className="main-content">
          {/* Left side - Navigation */}
          <aside className="sidebar">
            <NavMenu />
          </aside>
        </main>

        <footer>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
