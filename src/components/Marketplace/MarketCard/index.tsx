import React from 'react';
import { Button, notification, Popconfirm } from 'antd';

import Frame from 'containers/Frame';

// @ts-ignore
import head from 'assets/images/png/head.png';

import cx from './index.module.scss';

export interface IProps {
  price: number;
  description: string;
}

const MarketCard = ({ price, description }: IProps) => {
  return (
    <Frame theme="white">
      <div className={cx.wrapper}>
        <div className={cx.img}>
          <img src={head} alt="123" />
        </div>
        <p>{description}</p>
        <div className={cx.price}>
          <p>{price} VTB</p>
          <Popconfirm
            title="У вас 150 NFT-сертификатов, списать 5?"
            okText="Да"
            onConfirm={() => {
              notification.success({
                message: 'Вы преобрели товар, покупка обрабатывается',
              });
            }}
          >
            <Button type="primary">Купить</Button>
          </Popconfirm>
        </div>
      </div>
    </Frame>
  );
};

export default MarketCard;
