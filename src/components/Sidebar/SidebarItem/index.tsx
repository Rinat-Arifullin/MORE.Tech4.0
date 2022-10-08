import React from 'react';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

import { ISideBarItem } from '../helper';

import cx from '../index.module.scss';

const SidebarItem = ({ linkPath, icon, title }: ISideBarItem) => {
  const { pathname } = useLocation();
  return (
    <Link to={linkPath}>
      <div
        className={classNames(cx.menuItem, pathname === linkPath && cx.active)}
      >
        <span className={cx.leftLine} />
        {icon}
        <h3>{title}</h3>
      </div>
    </Link>
  );
};

export default SidebarItem;
