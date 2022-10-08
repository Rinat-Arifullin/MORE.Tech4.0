/* eslint-disable prefer-template */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { notification } from 'antd';

import { ISeasonHistoryItem, SEASON_HISTORY_ALIAS } from './type';

const dummyData: ISeasonHistoryItem[] = [];

for (let i = 0; i < 15; i += 1) {
  dummyData.push({
    num: '#' + String(i),
    name: 'name ' + i,
    taskCount: i,
    guild: 'guild ' + i,
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
