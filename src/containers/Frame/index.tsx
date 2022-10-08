import React from 'react';
import classNames from 'classnames';

// @ts-ignore
import cx from './style.module.scss';

export type TFrameTheme = 'dark' | 'white' | 'dark-grad';

type TProps = {
  theme: TFrameTheme;
  children: React.ReactNode;
};

const Frame: React.FC<TProps> = ({ theme, children }) => {
  return <div className={classNames(cx.frame, cx[theme])}>{children}</div>;
};

export default Frame;
