import React from 'react';

import Header from '../header';
import ProfileTasks from '../profile-tasks';
import TaskList from '../task-list';

import './index.css';


const TasksPage = () => {
  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <div className="content">
          <ProfileTasks />
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default TasksPage;