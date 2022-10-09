import React, { useEffect } from 'react';

import { Home } from 'components/HomePage';
import { useAppDispatch } from 'customHooks/redux';
import {
  fetchWalletsBalance,
  fetchWalletsNFT,
} from '../../store/wallets/thunk';
import { keys } from '../../store/initData/type';

const HomePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchWalletsBalance(keys.publicKey));
    dispatch(fetchWalletsNFT(keys.publicKey));
  }, []);

  return <Home />;
};

export default HomePage;
