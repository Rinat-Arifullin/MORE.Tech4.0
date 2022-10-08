/* eslint-disable prefer-template */
import { createAsyncThunk } from '@reduxjs/toolkit';

import { notification } from 'antd';
import { ITaskCard } from 'components/Task/TaskCard';

// @ts-ignore
import avatar1 from 'assets/images/png/avatar.png';
// @ts-ignore
import img from 'assets/images/png/img.png';

import { TASK_LIST_ALICE } from './type';

const dummyData: ITaskCard[] = [];

for (let i = 0; i < 15; i += 1) {
  dummyData.push({
    title: 'title ' + i,
    status: 'status',
    date: 'date',
    executer: 'Пупкин В.А',
    avatar: avatar1,
    taskImg: img,
    name: 'meeting',
    taskText:
      'Провести встречу с новыми сотрудниками и рассказать о внутренних процессах.',
  });
}

export const fetchTaskList = createAsyncThunk<ITaskCard[], any, any>(
  `${TASK_LIST_ALICE}/list`,
  async () => {
    try {
      return dummyData;
    } catch (error) {
      notification.error({ message: 'ошибочка' });
      return [];
    }
  },
);
