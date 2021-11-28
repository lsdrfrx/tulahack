import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import ScheduleHeader from '../schedule-header';
import ScheduleItem from '../schedule-item';

import './schedule.css';


const Schedule = ({ schedule }) => {

  const renderedSchedule = useMemo(() => {
    return schedule.map(({ day, classes }, index) => <ScheduleItem day={day} classes={classes} key={index}/>)
  })

  return (
    <div className="schedule">
      <ScheduleHeader/>
      <div className="schedule__container">
        {renderedSchedule}
      </div>
    </div>
  );
}

Schedule.propTypes = {
  days: PropTypes.array
};

export default Schedule;


