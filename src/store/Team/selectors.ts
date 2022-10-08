import { RootState } from '../index';

export const getTeamListDataSource = (store: RootState) =>
  store.teamList.dataSource;
export const getTeamListLoading = (store: RootState) => store.teamList.loading;
