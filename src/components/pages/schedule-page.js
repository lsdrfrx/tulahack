import React from 'react';

import Header from '../header';
import Profile from '../profile';
import Schedule from '../schedule';
import Chat from '../chat';

import './index.css';


const MainPage = () => {
  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <div className="content">
          <Profile name={'Иван'} surname={'Иванов'}/>
          <Schedule />
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default MainPage;