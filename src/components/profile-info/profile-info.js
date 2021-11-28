import React, { useMemo } from 'react';
import { connect } from 'react-redux';

import ProgressBarBlock from '../progress-bar-block';

import './profile-info.css';


const ProfileInfo = ({ name, surname, age, userClass, school, email, progress }) => {

  const renderedProgressBars = useMemo(() => {
    return progress.map((data, index) => <ProgressBarBlock {...data} key={index}/>)
  })

  return (
    <div className="profile-info">
      <h3 className="profile-info__title">Мой профиль</h3>
      <div className="profile-info__img">
        <img src="https://cdn.pixabay.com/photo/2019/07/16/23/30/bird-4342754_960_720.jpg" alt="" />
      </div>
      <div className="profile-info__content">
        <div className="profile-info__fields">
          <div className="profile-info__field">
            <p>Имя:</p>
          </div>
          <div className="profile-info__field">
            <p>Фамилия:</p>
          </div>
          <div className="profile-info__field">
            <p>Возраст:</p>
          </div>
          <div className="profile-info__field">
            <p>Класс:</p>
          </div>
          <div className="profile-info__field">
            <p>Школа:</p>
          </div>
          <div className="profile-info__field">
            <p>Почта:</p>
          </div>
        </div>
        <div className="profile-info__values">
          <div className="profile-info__value">
            <p>{name}</p>
          </div>
          <div className="profile-info__value">
            <p>{surname}</p>
          </div>
          <div className="profile-info__value">
            <p>{age}</p>
          </div>
          <div className="profile-info__value">
            <p>{userClass}</p>
          </div>
          <div className="profile-info__value">
            <p>{school}</p>
          </div>
          <div className="profile-info__value">
            <p>{email}</p>
          </div>
        </div>
      </div>
      {renderedProgressBars}
    </div>
  );
}

const mapStateToProps = ({ user: { info: { name, surname, age, school, email, class: userClass }, progress }}) => {
  return { name, surname, age, school, email, userClass, progress };
}

export default connect(mapStateToProps)(ProfileInfo);