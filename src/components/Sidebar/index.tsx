import React from 'react';
import classNames from 'classnames';
import { Divider } from 'antd';

// @ts-ignore
import { ReactComponent as HeadphonesIcon } from 'assets/images/svg/headphones.svg';
// @ts-ignore
import { ReactComponent as LogoutIcon } from 'assets/images/svg/log-out.svg';
// @ts-ignore
import { ReactComponent as SettingIcon } from 'assets/images/svg/settings.svg';

import { sideBarItems } from './helper';

import SidebarItem from './SidebarItem';
import cx from './index.module.scss';

const Sidebar = () => {
  return (
    <div className={cx.wrapper}>
      <div>
        {sideBarItems.map((route) => {
          return (
            <SidebarItem
              linkPath={route.linkPath}
              title={route.title}
              icon={route.icon}
            />
          );
        })}
      </div>

      <div>
        <div className={classNames(cx.menuItem)}>
          <span className={cx.leftLine} />
          <SettingIcon />
          <h3>Настройки</h3>
        </div>
        <div className={classNames(cx.menuItem)}>
          <span className={cx.leftLine} />
          <HeadphonesIcon />
          <h3>Поддержка</h3>
        </div>
        <Divider />
        <div className={classNames(cx.menuItem)}>
          <span className={cx.leftLine} />
          <LogoutIcon />
          <h3>Выход</h3>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
