import React from "react";

import './chat-message.css';


const ChatMessage = ({ name, surname, text }) => {
  return (
    <div className="chat-message">
      <span className="chat-message__user">
        {name} {surname}:
      </span>
      <p className="chat-message__message">
        {text}
      </p>
    </div>
  )
}

export default ChatMessage;