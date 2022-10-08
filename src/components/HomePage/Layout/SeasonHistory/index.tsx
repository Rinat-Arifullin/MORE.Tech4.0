import React from 'react';

import Frame from 'containers/Frame';
import SeasonHistoryHeader from './Header';
import SeasonHistoryTable from './Table';

const SeasonHistory = () => {
  return (
    <Frame theme="white">
      <SeasonHistoryHeader />
      <SeasonHistoryTable />
    </Frame>
  );
};

export default SeasonHistory;
