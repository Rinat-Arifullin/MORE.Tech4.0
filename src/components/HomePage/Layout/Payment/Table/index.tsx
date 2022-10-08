import React from 'react';
import { Table } from 'antd';

import { IPaymentItem } from 'store/PaymentHistory/types';
import { columns } from './helpers';

interface IProps {
  dataSource: IPaymentItem[];
}

const PaymentTable = ({ dataSource }: IProps) => {
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={false}
      scroll={{ y: 500, x: 600 }}
    />
  );
};

export default PaymentTable;
