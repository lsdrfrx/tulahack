import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import ScheduleHeader from '../schedule-header';
import ScheduleItem from '../schedule-item';

import './schedule.css';


const Schedule = () => {

  const days = useMemo(() => {
    return [
      { 
        day: 'Время', 
        classes: ['7:45', '7:45', '7:45', '7:45', '7:45', '7:45', '7:45', '7:45'] },
      { 
        day: 'Понедельник', 
        classes: ['Математика', 'Физика', 'Математика', 'Физика', 'Математика', 'Физика', 'Математика', 'Физика'] 
      },
      { 
        day: 'Вторник', 
        classes: ['Математика', 'Физика', 'Математика', 'Физика', 'Математика', 'Физика', 'Математика', 'Физика'] 
      },
      { 
        day: 'Среда', 
        classes: ['Математика', 'Физика', 'Математика', 'Физика', 'Математика', 'Физика', 'Математика', 'Физика'] 
      },
      { 
        day: 'Четверг', 
        classes: ['Математика', 'Физика', 'Математика', 'Физика', 'Математика', 'Физика', 'Математика', 'Физика'] 
      },
      { 
        day: 'Пятница', 
        classes: ['Математика', 'Физика', 'Математика', 'Физика', 'Математика', 'Физика', 'Математика', 'Физика'] 
      },
      { 
        day: 'Суббота', 
        classes: ['Математика', 'Физика', 'Математика', 'Физика', 'Математика', 'Физика']
      },
    ]
  })

  const renderedDays = useMemo(() => {
    return days.map(({ day, classes }, index) => <ScheduleItem day={day} classes={classes} key={index}/>)
  })

  return (
    <div className="schedule">
      <ScheduleHeader userClass={'4-A'}/>
      <div className="schedule__container">
        {renderedDays}
      </div>
    </div>
  );
}

Schedule.propTypes = {
  days: PropTypes.array
};

export default Schedule;


