import React from 'react';

import Header from '../header';
import Profile from '../profile';
import { ScheduleContainer, ChatContainer } from '../containers';

import './index.css';


const MainPage = () => {
  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <div className="content">
          <Profile />
          <ScheduleContainer />
          <ChatContainer />
        </div>
      </div>
    </div>
  );
}

export default MainPage;