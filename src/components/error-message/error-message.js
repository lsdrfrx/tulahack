import React from "react";

import './error-message.css';

const ErrorMessage = () => {
  return (
    <div className="error-message">
      <div className="error-message__text">
        <p>Ничего не работает. </p>
        <p>Почему? А кто знает...</p>
      </div>
    </div>
  );
}

export default ErrorMessage;