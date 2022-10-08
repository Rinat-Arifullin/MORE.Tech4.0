import React from 'react';

// @ts-ignore
import shirt from 'assets/images/png/shirt.png';
// @ts-ignore
import heat from 'assets/images/png/pngwing.png';
// @ts-ignore
import hudi from 'assets/images/png/hudi.png';

import cx from './index.module.scss';

const MarketFilters = () => {
  return (
    <div className={cx.wrapper}>
      <div className={cx.card}>
        <img src={shirt} alt="123" />
        Футболки
      </div>
      <div className={cx.card}>
        <img src={heat} alt="123" />
        Кепки
      </div>
      <div className={cx.card}>
        <img src={hudi} alt="123" />
        Худи
      </div>
    </div>
  );
};

export default MarketFilters;
