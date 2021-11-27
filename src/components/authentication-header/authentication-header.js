import React from "react";
import { NavLink } from "react-router-dom";

import './authentication-header.css';


const AuthenticationHeader = () => {
  return (
    <header className="authentication-header">
      <nav className="authentication-header__nav">
        <ul>
          <li>
            <NavLink to="/authentication/sign-in" className="authentication__link">
              Вход
            </NavLink>
          </li>
          <li>
            <NavLink to="/authentication/sign-up" className="authentication__link">
              Регистрация
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AuthenticationHeader;