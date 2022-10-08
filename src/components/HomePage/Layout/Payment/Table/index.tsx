import React from 'react';
import { Table } from 'antd';

import { IPaymentItem } from 'store/PaymentHistory/types';
import { columns } from './helpers';

interface IProps {
  dataSource: IPaymentItem[];
  y?: number;
}

const PaymentTable = ({ dataSource, y = 400 }: IProps) => {
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={false}
      scroll={{ y, x: 600 }}
    />
  );
};

export default PaymentTable;
