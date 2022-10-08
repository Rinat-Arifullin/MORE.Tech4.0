/* eslint-disable  no-empty-pattern */
import { createSlice } from '@reduxjs/toolkit';
import { IPaymentHistoryStore, PAYMENT_HISTORY_ALIAS } from './types';
import { fetchPaymentHistory } from './thunk';

const initialState: IPaymentHistoryStore = {
  loading: false,
  error: null,
  dataSource: [],
};

export const paymentHistorySlice = createSlice({
  name: PAYMENT_HISTORY_ALIAS,
  initialState,
  reducers: {},
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

export const {} = paymentHistorySlice.actions;

export default paymentHistorySlice.reducer;
