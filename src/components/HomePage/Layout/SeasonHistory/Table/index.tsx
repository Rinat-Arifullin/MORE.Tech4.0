import React, { useEffect } from 'react';
import { Table } from 'antd';

import { useAppDispatch, useAppSelector } from 'customHooks/redux';
import { getSeasonHistoryDataSource } from 'store/SeasonHistory/selectors';
import { fetchSeasonHistory } from 'store/SeasonHistory/thunk';

import { columns } from './helpers';

const SeasonHistoryTable = () => {
  const dataSource = useAppSelector(getSeasonHistoryDataSource);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSeasonHistory({}));
  }, []);

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      scroll={{ y: 350 }}
      pagination={false}
    />
  );
};

export default SeasonHistoryTable;
