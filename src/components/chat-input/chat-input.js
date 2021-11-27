import React from "react";
import { Field } from "react-final-form";

import './chat-input.css';


const ChatInput = () => {
  return (
    <div className="chat-input">
      <Field name={'messageText'}>
        {
          ({ input }) => <input 
                            {...input}
                            type='text'
                            required
                            autoComplete="off"
                            className="chat-input__input"/>
        }
      </Field>
      <button className="chat-input__button" type="submit">Отправить</button>
    </div>
  );
}

export default ChatInput;