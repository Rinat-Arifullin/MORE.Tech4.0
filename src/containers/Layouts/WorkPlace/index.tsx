import React from 'react';

import Frame from 'containers/Frame';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

import cx from './index.module.scss';

const WorkPlaceLayout = ({ children }) => {
  return (
    <div className={cx.wrapper}>
      <div className={cx.header}>
        <Header />
      </div>
      <div className={cx.sidebar}>
        <Sidebar />
      </div>
      <div className={cx.content}>
        <Frame theme="gray">{children}</Frame>
      </div>
    </div>
  );
};

export default WorkPlaceLayout;
