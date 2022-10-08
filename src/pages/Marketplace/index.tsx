import React from 'react';
import MarketList from '../../components/Marketplace/MarketList';
import MarketFilters from '../../components/Marketplace/MarketFilters';
import MarketHeader from '../../components/Marketplace/MarketHeader';

const MarketplacePage = () => {
  return (
    <div>
      <MarketHeader />
      <MarketFilters />
      <MarketList />
    </div>
  );
};

export default MarketplacePage;
