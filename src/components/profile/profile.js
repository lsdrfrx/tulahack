import React, { useMemo } from 'react';

import ProgressBarBlock from '../progress-bar-block';

import './profile.css';


const Profile = ({ name, surname }) => {

  const progressBarData = useMemo(() => {
    return [
      { label: 'Информация', value: 40 },
      { label: 'Посты', value: 20 },
      { label: 'Профиль', value: 100 },
      { label: 'Оценки', value: 70 },
    ]
  });

  const renderedProgressBars = useMemo(() => {
    return progressBarData.map((data, index) => <ProgressBarBlock {...data} key={index}/>)
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

export default Profile;