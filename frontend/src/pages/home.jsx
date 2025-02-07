import React, { useState } from 'react';
import { UserCircle2 } from 'lucide-react'; 
import { useNavigate } from 'react-router-dom';

const HomeChat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Mock sending messages
  const handleSend = () => {
    if (inputValue.trim() !== '') {
      setMessages((prev) => [...prev, { text: inputValue, sender: 'user' }]);
      setInputValue('');
    }
  };

  // Mock audio upload
  const handleAudioUpload = () => {
    alert('Audio upload clicked! (Implement your logic here)');
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement logout logic here
    navigate('/signin');
  };

  return (
    <>
      <style>
        {`

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
            background: linear-gradient(to bottom right, #0a1128, #1b3b5a);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            color: #e6e6e6;
          }

          .homepage-container {
            position: relative;
            width: 100%;
            height: 100vh;
            overflow: hidden;
            background: radial-gradient(circle at 30% 30%, rgba(85, 99, 222, 0.2), transparent 50%);
          }

          .user-logo {
            position: absolute;
            top: 1rem;
            right: 1rem;
            cursor: pointer;
            transition: transform 0.3s ease;
          }

          .user-logo:hover {
            transform: scale(1.1);
          }

          .chat-container {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80%;
            height: 80%;
            background: linear-gradient(145deg, rgba(41, 50, 99, 0.8), rgba(27, 35, 66, 0.8));
            border-radius: 20px;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4), 0 5px 15px rgba(0, 0, 0, 0.3);
            display: flex;
            flex-direction: column;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.1);
          }

          .chat-header {
            background: linear-gradient(to right, #5563DE, #3940A7);
            color: #fff;
            padding: 1rem;
            font-size: 1.25rem;
            font-weight: 600;
            text-align: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .chat-messages {
            flex: 1;
            padding: 1rem;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            background: rgba(26, 37, 70, 0.4);
          }

          .message {
            margin: 0.5rem 0;
            padding: 0.75rem;
            border-radius: 10px;
            max-width: 60%;
            position: relative;
            overflow: hidden;
          }

          .message::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, rgba(255,255,255,0.1), transparent);
            z-index: 1;
          }

          .message.user {
            background-color: #5563DE;
            color: white;
            align-self: flex-end;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .message.bot {
            background-color: #2c3e50;
            color: #e6e6e6;
            align-self: flex-start;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .chat-input-area {
            position: relative;
            display: flex;
            align-items: center;
            padding: 1rem;
            background: rgba(41, 50, 99, 0.5);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
          }

          .chat-input {
            flex: 1;
            padding: 0.75rem;
            font-size: 1rem;
            border-radius: 10px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            background: rgba(255, 255, 255, 0.1);
            color: white;
            outline: none;
            transition: all 0.3s ease;
          }

          .chat-input:focus {
            border-color: #5563DE;
            box-shadow: 0 0 10px rgba(85, 99, 222, 0.5);
          }

          .chat-buttons {
            display: flex;
            gap: 0.5rem;
            margin-left: 0.5rem;
          }

          .icon-button {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: linear-gradient(145deg, #5563DE, #3940A7);
            color: #fff;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            transition: all 0.3s ease;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
          }

          .icon-button:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3);
          }

          .user-dropdown {
            position: absolute;
            top: 70px;
            right: 1rem;
            background: linear-gradient(145deg, rgba(41, 50, 99, 0.9), rgba(27, 35, 66, 0.9));
            border-radius: 10px;
            box-shadow: 0 10px 20px rgba(0,0,0,0.3);
            overflow: hidden;
            z-index: 10;
            border: 1px solid rgba(255,255,255,0.1);
          }

          .user-dropdown-item {
            padding: 10px 20px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            color: #e6e6e6;
          }

          .user-dropdown-item:hover {
            background-color: rgba(85, 99, 222, 0.2);
          }

          .user-dropdown-item.logout {
            color: #ff4444;
          }

          .user-dropdown-item.logout:hover {
            background-color: rgba(255, 68, 68, 0.1);
          }
        `}
      </style>

      <div className="homepage-container">
        {/* Top-right user logo */}
        <div className="user-logo" onClick={toggleDropdown}>
          <UserCircle2 color="#5563DE" size={50} />
        </div>
        {/* Conditionally render the dropdown if isDropdownOpen is true */}
        {isDropdownOpen && (
          <div className="user-dropdown">
            <div className="user-dropdown-item">
              Profile
            </div>
            <div className="user-dropdown-item logout" onClick={handleLogout}>
              Log Out
            </div>
          </div>
        )}
        {/* The chat UI occupying 80% of the screen */}
        <div className="chat-container">
          <div className="chat-header">Healthcare Chatbot</div>

          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.sender === 'user' ? 'user' : 'bot'}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-input-area">
            <input
              className="chat-input"
              type="text"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="chat-buttons">
              {/* Audio Upload Button */}
              <button
                className="icon-button"
                onClick={handleAudioUpload}
                title="Upload Audio"
              >
                &#127908;
              </button>

              {/* Send Text Button */}
              <button
                className="icon-button"
                onClick={handleSend}
                title="Send Message"
              >
                &#10148;
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeChat;