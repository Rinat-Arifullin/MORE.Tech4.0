/* eslint-disable prefer-template */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { notification } from 'antd';

import { ISeasonHistoryItem, SEASON_HISTORY_ALIAS } from './type';
import { getRandomInt, names } from '../PaymentHistory/thunk';

const dummyData: ISeasonHistoryItem[] = [];

export const guildes: string[] = [
  'Front-end',
  'Back-end',
  'Analytics',
  'Designer',
  'Top-manager',
];

for (let i = 0; i < 15; i += 1) {
  dummyData.push({
    num: '#' + String(i),
    name: names[getRandomInt(names.length)],
    taskCount: getRandomInt(10) + 10,
    guild: guildes[getRandomInt(guildes.length)],
    awards: 'awards ' + i,
  });
}

export const fetchSeasonHistory = createAsyncThunk<
  ISeasonHistoryItem[],
  any,
  any
>(`${SEASON_HISTORY_ALIAS}/list`, async () => {
  try {
    return dummyData;
  } catch (error) {
    notification.error({ message: 'ошибочка' });
    return [];
  }
});
