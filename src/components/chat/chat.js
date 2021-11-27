import React, { useMemo, useCallback } from 'react';
import { Form } from 'react-final-form';

import ChatInput from '../chat-input';
import ChatMessage from '../chat-message';

import './chat.css';


const Chat = () => {

  const messages = useMemo(() => {
    return [
      { user: 'Иван&nbspИванов', message: 'аыоваовыфаэвфаээфвэаэфэа-293а2оа2оза32а23а32а23а2'},
      { user: 'Иван Иванов', message: 'аыоваовыфаэвфаээфвэаэфэа-293а2оа2оза32а23а32а23а2'},
      { user: 'Иван Иванов', message: 'аыоваовыфаэвфаээфвэаэфэа-293а2оа2оза32а23а32а23а2'},
      { user: 'Иван Иванов', message: 'аыоваовыфаэвфаээфвэаэфэа-293а2оа2оза32а23а32а23а2'},
      { user: 'Иван Иванов', message: 'аыоваовыфаэвфаээфвэаэфэа-293а2оа2оза32а23а32а23а2'},
      { user: 'Иван Иванов', message: 'аыоваовыфаэвфаээфвэаэфэа-293а2оа2оза32а23а32а23а2'},
      { user: 'Иван Иванов', message: 'аыоваовыфаэвфаээфвэаэфэа-293а2оа2оза32а23а32а23а2'},
      { user: 'Иван Иванов', message: 'аыоваовыфаэвфаээфвэаэфэа-293а2оа2оза32а23а32а23а2'},
      { user: 'Иван Иванов', message: 'аыоваовыфаэвфаээфвэаэфэа-293а2оа2оза32а23а32а23а2'},
      { user: 'Иван Иванов', message: 'аыоваовыфаэвфаээфвэаэфэа-293а2оа2оза32а23а32а23а2'},
      { user: 'Иван Иванов', message: 'аыоваовыфаэвфаээфвэаэфэа-293а2оа2оза32а23а32а23а2'},
      { user: 'Иван Иванов', message: 'аыоваовыфаэвфаээфвэаэфэа-293а2оа2оза32а23а32а23а2'},
      { user: 'Иван Иванов', message: 'аыоваовыфаэвфаээфвэаэфэа-293а2оа2оза32а23а32а23а2'},
      { user: 'Иван Иванов', message: 'аыоваовыфаэвфаээфвэаэфэа-293а2оа2оза32а23а32а23а2'},
      { user: 'Иван Иванов', message: 'аыоваовыфаэвфаээфвэаэфэа-293а2оа2оза32а23а32а23а2'},
      { user: 'Иван Иванов', message: 'аыоваовыфаэвфаээфвэаэфэа-293а2оа2оза32а23а32а23а2'},
      { user: 'Иван Иванов', message: 'аыоваовыфаэвфаээфвэаэфэа-293а2оа2оза32а23а32а23а2'},
    ]
  });

  const handleSubmit = useCallback((value) => {
    console.log(value);
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

export default Chat;