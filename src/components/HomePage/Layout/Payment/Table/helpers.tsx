import { ColumnsType } from 'antd/es/table';

export const columns: ColumnsType = [
  {
    title: 'Операция',
    dataIndex: 'operation',
  },
  {
    title: 'ФИО',
    dataIndex: 'name',
  },
  {
    title: 'Статус',
    dataIndex: 'status',
  },
  {
    title: 'Сумма',
    dataIndex: 'sum',
  },
  {
    title: 'Дата',
    dataIndex: 'data',
  },
];
