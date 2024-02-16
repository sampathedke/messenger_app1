// MessageInput.js

import React, { useState } from 'react';

const MessageInput = ({ onMessageSubmit }) => {
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    if (message.trim() !== '') {
      onMessageSubmit(message);
      setMessage('');
    }
  };

  return (
    <div className="message-input">
      <input
        type="text"
        value={message}
        onChange={handleChange}
        placeholder="Type your message..."
        className="input-field"
      />
      <button onClick={handleSubmit} className="send-button">
        Send
      </button>
    </div>
  );
};

export default MessageInput;
