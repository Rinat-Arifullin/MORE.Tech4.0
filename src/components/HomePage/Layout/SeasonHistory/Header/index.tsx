import React from 'react';
import { Link } from 'react-router-dom';
import { EArea } from 'types/router';

import cx from './index.module.scss';

const SeasonHistoryHeader = () => {
  return (
    <div className={cx.wrapper}>
      <h3>История сезонности</h3>
      <Link to={EArea.History}>
        <a>Подробнее</a>
      </Link>
    </div>
  );
};

export default SeasonHistoryHeader;
