import React from 'react';
import MarketCard, { IProps } from '../MarketCard';

import cx from './index.module.scss';

const dummyData: IProps[] = [];

for (let i = 0; i < 15; i += 1) {
  dummyData.push({
    price: 5,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  });
}

const MarketList = () => {
  return (
    <div className={cx.wrapper}>
      {dummyData.map((item) => {
        return <MarketCard {...item} />;
      })}
    </div>
  );
};

export default MarketList;
