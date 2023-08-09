import React from 'react';
import NavMenu from './components/NavMenu'; // Import the NavMenu component;
import UserGreeting from './components/UserGreeting';
import HomePage from './components/HomePage'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import { auth } from './index';
import './App.css';
import AuthControl from './components/AuthControl';

function App() {
  return (
      <div className="App">
        <header>
          <UserGreeting />
        </header>

        <main className="main-content">
          <NavMenu />
        </main>

        <footer>{/* Footer content */}</footer>
      </div>
  );
};

export default App;
