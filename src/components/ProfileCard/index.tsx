import React from 'react';
import { Tag } from 'antd';
import { Link, useLocation } from 'react-router-dom';

import Frame from 'containers/Frame';

// @ts-ignore
import { ReactComponent as EditIcon } from 'assets/images/svg/edit.svg';
// @ts-ignore
import avatar from 'assets/images/png/avatar.png';

import cx from './index.module.scss';
import SendMoney from '../SendMoney';
import { EArea } from '../../types/router';

export interface IProfileCardProps {
  id: number;
  userAvatar: any;
  guildAvatar: any;
  guildTitle: string;
  professions: string[];
  name: string;
  raiting?: number;
  lvl?: number;
}

const ProfileCard = ({
  name,
  professions,
  guildTitle,
  guildAvatar,
  userAvatar,
  raiting,
  lvl,
  id,
}: IProfileCardProps) => {
  const { pathname } = useLocation();
  return (
    <Frame theme="white" classes={cx.height}>
      <div className={cx.wrapper}>
        <Link to="/">
          <EditIcon />
        </Link>
        <div className={cx.profile}>
          <div className={cx.avatar}>
            <div>
              <img src={userAvatar} alt="userAvatar" />
            </div>
            <h2>{name}</h2>
            {professions.map((item) => {
              return <Tag>{item}</Tag>;
            })}
          </div>
          <div className={cx.guild}>
            <p>Гильдия</p>
            <div className={cx.guildAvatar}>
              <div>
                <img src={guildAvatar} alt="guildAvatar" width="25px" />
              </div>
              <p>{guildTitle}</p>
            </div>
          </div>
          {raiting && (
            <div className={cx.raiting}>
              <h3>Рейтинг</h3>
              <div>{raiting} баллов</div>
            </div>
          )}
          {lvl && (
            <div className={cx.lvl}>
              <h3>Уровень</h3>
              <div>{lvl}-й</div>
            </div>
          )}
          {pathname !== EArea.Home && <SendMoney defaultUserId={name} />}
        </div>
      </div>
    </Frame>
  );
};

export default ProfileCard;
