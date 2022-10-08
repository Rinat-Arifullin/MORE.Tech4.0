import React from 'react';
import { Link } from 'react-router-dom';

import Frame, { TFrameTheme } from 'containers/Frame';

import { EArea } from 'types/router';

import cx from 'index.module.scss';

interface IProps {
  theme: TFrameTheme;
  count: string;
  title: string;
}

const TokenCount = ({ theme, count, title }: IProps) => {
  return (
    <Frame theme={theme}>
      <div className={cx.wrapper}>
        <div className={cx.title}>
          <h2>{title}</h2>
          <div>{count}</div>
        </div>

        <Link to={EArea.Tasks}>
          <a>Перейти к заданиям</a>
        </Link>
      </div>
    </Frame>
  );
};

export default TokenCount;
