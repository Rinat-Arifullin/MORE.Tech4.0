import { ITaskCard } from 'components/Task/TaskCard';

export const TASK_LIST_ALICE = 'taskList' as const;

export interface ITaskListStore {
  loading: boolean;
  dataSource: ITaskCard[];
  error: Error | null;
}
