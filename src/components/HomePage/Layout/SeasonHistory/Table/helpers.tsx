import React from 'react';
import { ColumnsType } from 'antd/es/table';

// @ts-ignore
import avatar2 from 'assets/images/png/avatar2.png';

import cx from './index.module.scss';

export const columns: ColumnsType = [
  {
    dataIndex: 'num',
    title: 'Место в рейтинге',
  },
  {
    dataIndex: 'name',
    title: 'ФИО',
  },
  {
    dataIndex: 'taskCount',
    title: 'Выполнил заданий',
    render: (title) => {
      return <div>{title}</div>;
    },
  },
  {
    dataIndex: 'guild',
    title: 'Гильдия',
    render: (title) => {
      return (
        <div className={cx.guild}>
          <span>{title}</span>
        </div>
      );
    },
  },
];
