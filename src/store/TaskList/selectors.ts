import { RootState } from '../index';

export const getTaskListDataSource = (store: RootState) =>
  store.taskList.dataSource;
export const getTaskListLoading = (store: RootState) => store.taskList.loading;
