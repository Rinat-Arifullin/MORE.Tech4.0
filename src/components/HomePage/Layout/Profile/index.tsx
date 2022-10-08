import React from 'react';
import { Button, Tag } from 'antd';
import { Link } from 'react-router-dom';

import Frame from 'containers/Frame';
import { EArea } from 'types/router';

// @ts-ignore
import { ReactComponent as EditIcon } from 'assets/images/svg/edit.svg';
// @ts-ignore
import avatar from 'assets/images/png/avatar.png';

import cx from './index.module.scss';

const ProfileCard = () => {
  return (
    <div className={cx.left}>
      <Frame theme="white" classes={cx.height}>
        <div className={cx.wrapper}>
          <Link to="/">
            <EditIcon />
          </Link>
          <div className={cx.profile}>
            <div className={cx.avatar}>
              <div>
                <img src={avatar} alt="userAvatar" />
              </div>
              <h2>пупкин Александр Олегович</h2>
              <Tag>UX designer</Tag>
              <Tag>Бизнес-аналитик</Tag>
            </div>
            <div className={cx.guild}>
              <p>Гильдия</p>
              <div className={cx.guildAvatar}>
                <div>
                  <img src={avatar} alt="guildAvatar" width="25px" />
                </div>
                <p>Любимые герои</p>
              </div>
            </div>
          </div>
        </div>
      </Frame>
      <Button type="primary">
        <Link to={EArea.Tasks}>Create task</Link>
      </Button>
    </div>
  );
};

export default ProfileCard;
