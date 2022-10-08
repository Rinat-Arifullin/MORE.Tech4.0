import React from 'react';
import { Button } from 'antd';

import RatingCard from './Rating';
import TokenCount from './TokenCount';

import cx from './index.module.scss';
import Payment from './Payment';
import ProfileCard from './Profile';
import SeasonHistory from './SeasonHistory';

const HomePageLayout = () => {
  return (
    <div className={cx.wrapper}>
      <div className={cx.statInfo}>
        <div>
          <RatingCard theme="white" progress={70} level="2" />
        </div>
        <div>
          <TokenCount theme="white" count="2 567" title="Количество монет" />
        </div>
        <div>
          <TokenCount
            theme="white"
            count="2 567"
            title="Количество NFT-сертификатов"
          />
        </div>
      </div>
      <div className={cx.middleSection}>
        <Payment />
        <ProfileCard />
      </div>
      <SeasonHistory />
    </div>
  );
};

export default HomePageLayout;
