import React from 'react';
import { Space, Button } from 'antd';

// @ts-ignore
import { ReactComponent as SearchIcon } from 'assets/images/svg/search.svg';
// @ts-ignore
import { ReactComponent as FilterIcon } from '../../../assets/images/svg/filter.svg';
// @ts-ignore
import { ReactComponent as CalendarIcon } from '../../../assets/images/svg/calendar.svg';

import cx from './index.module.scss';

const MarketHeader = () => {
  return (
    <div className={cx.wrapper}>
      <Space>
        <h3>Маркетплейс</h3>
        <Button type="primary">Все</Button>
        <Button>Участвую</Button>
        <Button>Текущие</Button>
        <Button>Архив</Button>
      </Space>

      <Space size="large">
        <SearchIcon />
        <FilterIcon />
        <CalendarIcon />
      </Space>
    </div>
  );
};

export default MarketHeader;
