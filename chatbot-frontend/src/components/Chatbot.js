// src/components/Chatbot.js
import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css';

const Chatbot = () => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([]);
  const [results, setResults] = useState([]);

  const handleSend = async () => {
    if (!query.trim()) return;

    // Add user's message to chat
    const newMessages = [...messages, { text: query, sender: 'user' }];
    setMessages(newMessages);
    setQuery('');

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/chatbot/', { query });

      // Extract product results
      const products = response.data.results || [];

      // Add bot reply and update product results
      setMessages([
        ...newMessages,
        { text: `Found ${products.length} result(s) for "${query}"`, sender: 'bot' }
      ]);
      setResults(products); // Update UI product section

    } catch (error) {
      console.error(error);
      setMessages([
        ...newMessages,
        { text: "Sorry, there was an error fetching results.", sender: 'bot' }
      ]);
    }
  };

  const handleReset = () => {
    setMessages([]);
    setResults([]);
    setQuery('');
  };

  return (
    <div className="chatbot-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="input-area">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask for a product..."
        />
        <button onClick={handleSend}>Send</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      {results.length > 0 && (
        <div className="results">
          <h3>Matching Products</h3>
          <div className="product-grid">
            {results.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.image_url} alt={product.name} />
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <p><strong>₹{product.price}</strong></p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
