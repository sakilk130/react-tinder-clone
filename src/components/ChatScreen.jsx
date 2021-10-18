import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';

import '../styles/ChatScreen.css';

function ChatScreen() {
  const [input, setInput] = useState([]);
  const [messages, setMessages] = useState([
    {
      name: 'Labrador',
      image:
        'https://gooddoggies.online/wp-content/uploads/2020/06/5-Tips-To-Training-A-Labrador-Puppy-1.jpg',
      message: 'Hey',
    },
    {
      name: 'Labrador',
      image:
        'https://gooddoggies.online/wp-content/uploads/2020/06/5-Tips-To-Training-A-Labrador-Puppy-1.jpg',
      message: 'Bork bork bork',
    },
    {
      message: 'yo',
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput('');
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH LABRADOR ON 08/21/2020
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__owntext">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          type="text"
          className="chatScreen__inputField"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="chatScreen__inputButton"
          onClick={handleSend}
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
