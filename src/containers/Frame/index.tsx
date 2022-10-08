import React from 'react';
import classNames from 'classnames';

// @ts-ignore
import cx from './style.module.scss';

export type TFrameTheme = 'dark' | 'white' | 'dark-grad' | 'gray';

type TProps = {
  theme: TFrameTheme;
  children: React.ReactNode;
  classes?: any;
};

const Frame: React.FC<TProps> = ({ theme, children, classes }) => {
  return (
    <div className={classNames(cx.frame, cx[theme], ...(classes || []))}>
      {children}
    </div>
  );
};

export default Frame;
