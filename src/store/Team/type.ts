import { IProfileCardProps } from 'components/ProfileCard';

export const TEAM_LIST_ALICE = 'teamListAlice' as const;

export interface ITeamListStore {
  loading: boolean;
  dataSource: IProfileCardProps[];
}
