import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

const mapStateToProps = ({ user: { info }}) => {
  return { userClass: info.class };
}

export default connect(mapStateToProps, null)(ScheduleHeader);