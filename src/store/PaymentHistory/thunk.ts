import { createAsyncThunk } from '@reduxjs/toolkit';
import { notification } from 'antd';

import { IPaymentItem, PAYMENT_HISTORY_ALIAS } from './types';

export const names: string[] = [
  'Сидоров Алексей',
  'Мальцев Владимир',
  'Родион Артёмов',
  'Елизовета Берёзова',
];

const statuses = ['В обработке', 'Перевед выполнен'];

const dates = ['07.10.2022', '08.10.2022', '09.10.2022'];

const dummyDataIPaymentItem: IPaymentItem[] = [];

export const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

for (let i = 0; i < 20; i += 1) {
  dummyDataIPaymentItem.push({
    operation: 'Поступление',
    name: names[getRandomInt(names.length)],
    status: statuses[getRandomInt(statuses.length)],
    sum: String(getRandomInt(15) + 1),
    data: dates[getRandomInt(dates.length)],
  });
}

export const fetchPaymentHistory = createAsyncThunk<IPaymentItem[], any, any>(
  `${PAYMENT_HISTORY_ALIAS}/list`,
  async () => {
    try {
      // const data = await fetchPaymentHistoryRequest();
      return dummyDataIPaymentItem;
    } catch (error) {
      notification.error({ message: 'ошибочка' });
      return [];
    }
  },
);
