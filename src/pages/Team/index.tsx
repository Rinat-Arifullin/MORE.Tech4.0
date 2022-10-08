import React from 'react';
import { Divider } from 'antd';

import TeamSearch from 'components/TeamPage/TeamSearch';
import TeamList from 'components/TeamPage/TeamList';

const TeamLayout = () => {
  return (
    <div>
      <TeamSearch />
      <Divider />
      <TeamList />
    </div>
  );
};

export default TeamLayout;
