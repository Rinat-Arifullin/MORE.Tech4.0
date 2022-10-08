import React, { useEffect } from 'react';

import Frame from 'containers/Frame';

import { useAppDispatch, useAppSelector } from 'customHooks/redux';
import { getPaymentHistoryDataSource } from 'store/PaymentHistory/selectors';
import { fetchPaymentHistory } from 'store/PaymentHistory/thunk';

import PaymentTable from './Table';
import PaymentHeader from './Header';

const Payment = () => {
  const dataSource = useAppSelector(getPaymentHistoryDataSource);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPaymentHistory({}));
  }, []);
  return (
    <Frame theme="white">
      <PaymentHeader />
      <PaymentTable dataSource={dataSource} />
    </Frame>
  );
};
export default Payment;
