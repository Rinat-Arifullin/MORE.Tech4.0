import React from 'react';
import { Link } from 'react-router-dom';
import { Space } from 'antd';

import Frame, { TFrameTheme } from 'containers/Frame';

import { EArea } from 'types/router';

import cx from './index.module.scss';
import SendMoney from '../../../SendMoney';

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
          <div className={cx.count}>{count}</div>
        </div>
        <Space>
          <Link to={EArea.Tasks}>
            <a>Перейти к заданиям</a>
          </Link>
          <SendMoney />
        </Space>
      </div>
    </Frame>
  );
};

export default TokenCount;
