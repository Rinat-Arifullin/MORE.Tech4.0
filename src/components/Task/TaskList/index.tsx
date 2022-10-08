import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'customHooks/redux';
import { getTaskListDataSource } from 'store/TaskList/selectors';
import { fetchTaskList } from 'store/TaskList/thunk';

import cx from './index.module.scss';
import TaskCard from '../TaskCard';

const TaskList = () => {
  const dataSource = useAppSelector(getTaskListDataSource);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTaskList({}));
  }, []);

  console.log(dataSource);
  return (
    <div className={cx.wrapper}>
      {dataSource.map((item) => (
        <TaskCard {...item} />
      ))}
    </div>
  );
};
export default TaskList;
