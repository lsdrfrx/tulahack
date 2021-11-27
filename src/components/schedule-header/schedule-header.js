import React from 'react';
import PropTypes from 'prop-types';

import './schedule-header.css';


const ScheduleHeader = ({ userClass }) => {
  return (
    <header className="schedule-header">
      <h2 className="schedule-header__title">
        <p>Расписание {userClass} класса</p>
      </h2>
    </header>
  );
};

export default ScheduleHeader;