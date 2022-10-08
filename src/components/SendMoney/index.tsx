/* eslint-disable  no-plusplus */
import React, { useState } from 'react';
import { Button, Modal, Carousel, Select, Input, notification } from 'antd';

import cx from './index.module.scss';
import { useAppDispatch } from '../../customHooks/redux';
import { addPayment } from '../../store/PaymentHistory/slice';
import { names } from '../../store/PaymentHistory/thunk';

const { Option } = Select;

const children: React.ReactNode[] = [];

names.forEach((name) => {
  children.push(<Option key={name}>{name}</Option>);
});

interface IProps {
  defaultUserId?: string;
}

const SendMoney = ({ defaultUserId }: IProps) => {
  const dispatch = useAppDispatch();
  const [visible, setVisible] = useState(false);

  const onClose = () => {
    setVisible(false);
  };

  const onOk = () => {
    dispatch(
      addPayment({
        operation: 'Перевод',
        name: 'Родион Артёмов',
        status: 'В обработке',
        sum: '5',
        data: '09.10.2022',
      }),
    );
    notification.success({ message: 'Перевод в обработке' });
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        Перевести
      </Button>
      <Modal
        title="Перевести"
        visible={visible}
        onOk={onOk}
        onCancel={onClose}
        okText="Перевести"
      >
        <>
          <h4>Откуда</h4>
          <Carousel>
            <div className={cx.slide}>
              <h2>Монеты</h2>
              <div>2 567</div>
            </div>
            <div className={cx.slide}>
              <h2>NFT-сертификаты</h2>
              <div>156</div>
            </div>
          </Carousel>
          <h4 style={{ marginTop: '2rem' }}>Кому</h4>
          <Select
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="Выберите пользователей"
            defaultValue={defaultUserId && [defaultUserId]}
          >
            {children}
          </Select>
          <h4 style={{ marginTop: '2rem' }}>Сумма</h4>
          <Input placeholder="Введите сумму" />
        </>
      </Modal>
    </>
  );
};

export default SendMoney;
