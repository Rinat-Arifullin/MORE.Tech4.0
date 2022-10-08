import React from 'react';
import { Link } from 'react-router-dom';

import { EArea } from 'types/router';

import cx from './index.module.scss';

const PaymentHeader = () => {
  return (
    <div className={cx.wrapper}>
      <h1>История начисление и списание за месяц</h1>
      <Link to={EArea.History}>
        <a>Подробнее</a>
      </Link>
    </div>
  );
};

export default PaymentHeader;
