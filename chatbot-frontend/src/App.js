// src/App.js
import React, { useState } from 'react';
import Chatbot from './components/Chatbot';
import Login from './components/Login';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('access_token'));

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <h1 className="logo-design">E-Commerce Chatbot</h1>
      <button onClick={handleLogout}>Logout</button>
      {!isLoggedIn ? (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <>
          <Chatbot />
          <ProductList />
        </>
      )}
    </div>
  );
}

export default App;
