import React, { useEffect } from 'react';
import ProfileCard from 'components/ProfileCard';
import { useAppDispatch, useAppSelector } from 'customHooks/redux';

import { getTeamListDataSource } from 'store/Team/selectors';
import { fetchTeamList } from 'store/Team/thunk';

import cx from './index.module.scss';

const TeamList = () => {
  const dataSource = useAppSelector(getTeamListDataSource);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTeamList({}));
  }, []);

  return (
    <div className={cx.wrapper}>
      {dataSource.map((item) => {
        return (
          <ProfileCard
            key={item.id}
            id={item.id}
            userAvatar={item.userAvatar}
            guildAvatar={item.guildAvatar}
            guildTitle={item.guildTitle}
            professions={item.professions}
            name={item.name}
            lvl={item.lvl}
            raiting={item.raiting}
          />
        );
      })}
    </div>
  );
};

export default TeamList;
