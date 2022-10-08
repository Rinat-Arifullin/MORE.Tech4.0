import React from 'react';

import { Link } from 'react-router-dom';

// @ts-ignore
import { ReactComponent as Vtb } from 'assets/images/svg/VTB.svg';

import cx from './index.module.scss';

const Header = () => {
  return (
    <div className={cx.header}>
      <Link to="/">
        <Vtb />
      </Link>
    </div>
  );
};

export default Header;
