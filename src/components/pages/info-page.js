import React from 'react';

import ProfileInfo from '../profile-info';
import Header from '../header';
import SiteInfo from '../site-info';

import './index.css';


const InfoPage = () => {
  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <div className="content">
          <ProfileInfo />
          <SiteInfo />
        </div>
      </div>
    </div>
  );
}

export default InfoPage;