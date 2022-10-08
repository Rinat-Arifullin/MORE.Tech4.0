import { RootState } from '../index';

export const getPaymentHistoryDataSource = (store: RootState) =>
  store.paymentHistory.dataSource;
export const getPaymentHistoryLoading = (store: RootState) =>
  store.paymentHistory.loading;
export const getPaymentHistoryError = (store: RootState) =>
  store.paymentHistory.error;
