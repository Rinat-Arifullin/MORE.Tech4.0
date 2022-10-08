import { RootState } from '../index';

export const getSeasonHistoryDataSource = (store: RootState) =>
  store.seasonHistory.dataSource;
export const getSeasonHistoryLoading = (store: RootState) =>
  store.seasonHistory.loading;
export const getSeasonHistoryError = (store: RootState) =>
  store.seasonHistory.error;
