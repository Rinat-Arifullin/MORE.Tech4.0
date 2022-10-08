import { createAsyncThunk } from '@reduxjs/toolkit';
import { notification } from 'antd';

import { fetchPaymentHistoryRequest } from 'network/payment';

import { IPaymentItem, PAYMENT_HISTORY_ALIAS } from './types';

const dummyDataIPaymentItem: IPaymentItem[] = [];

for (let i = 0; i < 15; i += 1) {
  dummyDataIPaymentItem.push({
    operation: 'Operation',
    name: 'name',
    status: 'status',
    sum: '15',
    data: 'data',
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
