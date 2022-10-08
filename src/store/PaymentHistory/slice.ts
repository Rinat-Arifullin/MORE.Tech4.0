/* eslint-disable  no-empty-pattern */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  IPaymentHistoryStore,
  IPaymentItem,
  PAYMENT_HISTORY_ALIAS,
} from './types';
import { fetchPaymentHistory } from './thunk';

const initialState: IPaymentHistoryStore = {
  loading: false,
  error: null,
  dataSource: [],
};

export const paymentHistorySlice = createSlice({
  name: PAYMENT_HISTORY_ALIAS,
  initialState,
  reducers: {
    addPayment: (state, { payload }: PayloadAction<IPaymentItem>) => {
      const newState = [payload, ...state.dataSource];
      state.dataSource = newState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPaymentHistory.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.dataSource = [];
    });
    builder.addCase(fetchPaymentHistory.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.dataSource = payload;
    });
    builder.addCase(fetchPaymentHistory.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { addPayment } = paymentHistorySlice.actions;

export default paymentHistorySlice.reducer;
