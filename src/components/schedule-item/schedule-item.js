import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import './schedule-item.css';


const ScheduleItem = ({ day, classes }) => {

  const renderedClasses = useMemo(() => {
    const result = [];
    for (let i = 0; i < 8; i++) {
      result.push(
        <div className="schedule-item__class">
          <p>{ classes[i] ?? '' }</p>
        </div>
      )
    }
    return result;
  })

  return (
    <div className="schedule-item">
      <div className="schedule-item__day">
        <p>{day}</p>
      </div>
      {renderedClasses}
    </div>
  );
}

ScheduleItem.propTypes = {
  day: PropTypes.string, 
  classes: PropTypes.arrayOf(PropTypes.string)
};

export default ScheduleItem;