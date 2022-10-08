import React from 'react';
import TaskList from 'components/Task/TaskList';
import TaskListHeader from 'components/Task/TaskListHeader';

const TasksPage = () => {
  return (
    <div>
      <TaskListHeader />
      <TaskList />
    </div>
  );
};

export default TasksPage;
