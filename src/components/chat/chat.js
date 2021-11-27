import React, { useMemo, useCallback } from 'react';
import { Form } from 'react-final-form';
import { connect } from 'react-redux';

import ChatInput from '../chat-input';
import ChatMessage from '../chat-message';
import { withService, withServices } from '../hoc';
import { compose } from '../../utils';
import { sendMessage } from '../../actions';

import './chat.css';


const Chat = ({ messages, sendMessage }) => {

  const handleSubmit = useCallback(({ messageText }) => {
    sendMessage(messageText);
  }, []);

  const renderedMessages = useMemo(() => {
    return messages.map((message, index) => <ChatMessage {...message} key={index}/>)
  }, [messages]);

  return (
    <aside className="chat">
      <Form onSubmit={handleSubmit}>
        {
          ({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <header className="chat__header">
                <h3>Общий чат</h3>
              </header>
              <div className="chat__messages">
                {renderedMessages}
              </div>
              <ChatInput />
            </form>
          )
        }
      </Form>
    </aside>
  )
}

const mapDispatchToProps = (dispatch, { service }) => {
  return {
    sendMessage: (text) => dispatch(sendMessage(service, text))
  }
}

export default compose(
  withService,
  connect(null, mapDispatchToProps)
)(Chat);