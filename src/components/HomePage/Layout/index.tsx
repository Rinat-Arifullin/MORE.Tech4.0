import React from 'react';
import { Button } from 'antd';

import RatingCard from './Rating';
import TokenCount from './TokenCount';

import cx from './index.module.scss';

const HomePageLayout = () => {
  return (
    <div className={cx.wrapper}>
      <div className={cx.statInfo}>
        <div>
          <RatingCard theme="gray" progress={70} level="2" />
        </div>
        <div>
          <TokenCount theme="gray" count="2 567" title="Количество монет" />
        </div>
        <div>
          <TokenCount
            theme="gray"
            count="2 567"
            title="Количество NFT-сертификатов"
          />
        </div>
      </div>

      <div>История начисления и списагния</div>
      <div>
        Prifile <Button>Создать задание</Button>
      </div>
      <div>История сезонности</div>
    </div>
  );
};

export default HomePageLayout;
