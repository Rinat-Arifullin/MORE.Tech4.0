import React from 'react';
import { Progress } from 'antd';
import { Link } from 'react-router-dom';

import { EArea } from 'types/router';

import Frame, { TFrameTheme } from 'containers/Frame';

import cx from './index.module.scss';

interface IRatingCard {
  theme: TFrameTheme;
  level: '1' | '2' | '3';
  progress: number;
}

const RatingCard = ({
  theme = 'white',
  level = '1',
  progress = 0,
}: IRatingCard) => {
  return (
    <Frame theme={theme}>
      <div className={cx.wrapper}>
        <div className={cx.title}>
          <h2>Рейтинг</h2>
          <p className={cx.lvl}>{level}-й уровень</p>
        </div>
        <div>
          <p>До повышения уровня осталось:</p>
          <Progress percent={progress} />
        </div>
        <Link to={EArea.Tasks}>
          <a>Перейти к заданиям</a>
        </Link>
      </div>
    </Frame>
  );
};

export default RatingCard;
