import React from "react";
import { GiTwoCoins } from 'react-icons/gi';

import './profile-tasks.css';


const ProfileTasks = () => {
  return (
    <aside className="profile-tasks">
      <div className="profile-tasks__coins">
        <span>Ваши монеты: </span>
        <span>170</span>
        <span><GiTwoCoins /></span>
      </div>
      <div className="profile-tasks__completed">
        <span>Выполненных заданий: </span>
        <span>5</span>
      </div>
      <div className="profile-tasks__last">
        <span>Последнее задание: </span>
        <span>Игра</span>
      </div>
    </aside>
  );
}

export default ProfileTasks;