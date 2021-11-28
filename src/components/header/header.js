import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.css';


const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__list">
          <li>
            <NavLink to="/main/schedule" exact className="header__link">
              Расписание занятий
            </NavLink>
          </li>
          <li>
            <NavLink to="/main/tasks" exact className="header__link">
              Задания
            </NavLink>
          </li>
          <li>
            <NavLink to="/main/info" exact className="header__link"> 
              Информация
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;