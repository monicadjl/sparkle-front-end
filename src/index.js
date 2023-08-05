import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { BrowserRouter } from 'react-router-dom';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY0kHWNvFvSwi-TW_vy3A9NXTpCOkcBeY",
  authDomain: "sparkle-front-end.firebaseapp.com",
  projectId: "sparkle-front-end",
  storageBucket: "sparkle-front-end.appspot.com",
  messagingSenderId: "936939480448",
  appId: "1:936939480448:web:62ce7f49bf3987105d0d65"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

// init services
const db = getFirestore(firebase);
const auth = getAuth(firebase);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.render(
  <React.StrictMode>
    {/* Wrap your App component with BrowserRouter */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

export { db, auth, firebase };