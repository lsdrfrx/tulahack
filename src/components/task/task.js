import React from 'react';
import { GiTwoCoins } from 'react-icons/gi';

import './task.css';


const Task = () => {
  return (
    <div className="task">
      <h4 className="task__title">
        Выполнить дз
      </h4>
      <div className="task__description">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, sequi pariatur assumenda ullam sapiente ex optio velit cumque delectus, aliquid natus? In voluptatem nihil ipsam!</p>
      </div>
      <div className="task__price">
        <span>170</span>
        <span><GiTwoCoins /></span>
      </div>
    </div>
  );
}

export default Task;