import React, { useMemo } from "react";
import PropTypes from 'prop-types';

import './progress-bar-block.css';


const ProgressBarBlock = ({ label, value }) => {

  const modificator = useMemo(() => {
    return value === 100 ? 'green' : 'blue'
  });

  return (
    <div className="progress-bar-block">
      <label className="progress-bar-block__label">{label}</label>
      <div className="progress-bar">
        <progress className={"progress progress_" + modificator} max="100" value={value}></progress>
        <div className="progress-bar__value">{value}%</div>
      </div>
    </div>
  );
}

ProgressBarBlock.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
}

export default ProgressBarBlock;