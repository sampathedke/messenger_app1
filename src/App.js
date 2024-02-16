// App.js

import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import  './App.css'

const App = () => {
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <div className="messenger-container">
      <h1 style={{background:'#e9e9e9',margin:0}}>Messenger App</h1>
      <div className='box'>
      <MessageList messages={messages} />
      </div>
      <MessageInput onMessageSubmit={handleMessageSubmit} />
    </div>
  );
};

export default App;
