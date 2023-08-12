import React from 'react';
import NavMenu from './components/NavMenu'; // Import the NavMenu component;
import UserGreeting from './components/UserGreeting';
import './App.css';
import ImageCarousel from './components/ImgCarousel';

function App() {
  return (
      <div className="App">
        <header>
          <UserGreeting />
        </header>

        <main className="main-content">
          <NavMenu />
          <ImageCarousel />
        </main>

        

        <footer>{/* Footer content */}</footer>
      </div>
  );
};

export default App;
