import React from "react";

import './chat-message.css';


const ChatMessage = ({ user, message }) => {
  return (
    <div className="chat-message">
      <span className="chat-message__user">
        {user}:
      </span>
      <p className="chat-message__message">
        {message}
      </p>
    </div>
  )
}

export default ChatMessage;