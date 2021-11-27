import React, { useMemo } from 'react';

import ProgressBarBlock from '../progress-bar-block';
import { connect } from 'react-redux';

import './profile.css';


const Profile = ({ name, surname, progress }) => {

  const renderedProgressBars = useMemo(() => {
    return progress.map((data, index) => <ProgressBarBlock {...data} key={index}/>)
  })

  return (
    <aside className="profile">
      <header className="profile__header">
        <p>Мой профиль</p>
      </header>
      <main className="profile__main">
        <div className="profile__avatar">
          <img src="https://cdn.pixabay.com/photo/2019/07/16/23/30/bird-4342754_960_720.jpg" alt="profile avatar" />
        </div>
        <div className="profile__info">
          <p>{name} {surname}</p>
        </div>
        <div className="profile__progress-bars">
          {renderedProgressBars}
        </div>
      </main>
    </aside>
  );
}

const mapStateToProps = ({ user: { progress, info: { name, surname }}}) => {
  return { progress, name, surname }
}

export default connect(mapStateToProps, null)(Profile);