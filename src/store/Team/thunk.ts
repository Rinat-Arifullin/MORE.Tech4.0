import { createAsyncThunk } from '@reduxjs/toolkit';
import { notification } from 'antd';

import { IProfileCardProps } from 'components/ProfileCard';

// @ts-ignore
import avatar1 from 'assets/images/png/avatar.png';
// @ts-ignore
import avatar2 from 'assets/images/png/avatar2.png';

import { TEAM_LIST_ALICE } from './type';
import { getRandomInt, names } from '../PaymentHistory/thunk';
import { guildes } from '../SeasonHistory/thunk';

const dummyData: IProfileCardProps[] = [];

const professions: string[][] = [
  ['UX designer', 'Бизнес аналитик'],
  ['Back-end', 'Top-manager'],
  ['Front-end'],
];

for (let i = 0; i < 15; i += 1) {
  dummyData.push({
    userAvatar: avatar1,
    guildAvatar: avatar2,
    guildTitle: guildes[getRandomInt(guildes.length)],
    professions: professions[getRandomInt(professions.length)],
    name: names[getRandomInt(names.length)],
    raiting: getRandomInt(30) + 5,
    lvl: getRandomInt(3) + 1,
    id: i,
  });
}

export const fetchTeamList = createAsyncThunk<IProfileCardProps[], any, any>(
  `${TEAM_LIST_ALICE}/list`,
  async () => {
    try {
      return dummyData;
    } catch (error) {
      notification.error({ message: 'ошибочка' });
      return [];
    }
  },
);
