export const SEASON_HISTORY_ALIAS = 'seasonHistory' as const;

export interface ISeasonHistoryItem {
  num: string;
  name: string;
  taskCount: number;
  guild: string;
  awards: string;
}

export interface ISeasonHistoryStore {
  loading: boolean;
  error: Error | null;
  dataSource: ISeasonHistoryItem[];
}
