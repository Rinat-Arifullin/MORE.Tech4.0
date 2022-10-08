import React from 'react';
import { Button } from 'antd';

const HomePageLayout = () => {
  return (
    <div>
      <div>Рейтинг</div>
      <div>Количество монет</div>
      <div>Количество NFT-сертификатов</div>
      <div>История начисления и списагния</div>
      <div>
        Prifile<Button>Создать задание</Button>
      </div>
      <div>История сезонности</div>
    </div>
  );
};

export default HomePageLayout;
