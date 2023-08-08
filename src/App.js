import React from 'react';
import './App.css';
import NavMenu from './components/NavMenu'; // Import the NavMenu component;
import UserGreeting from './components/UserGreeting';



function App() {
  
  return (
    <div className="App">
      
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
  );
};

export default App;
