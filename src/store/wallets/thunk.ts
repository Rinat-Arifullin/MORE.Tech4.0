import { createAsyncThunk } from '@reduxjs/toolkit';
import { notification } from 'antd';

import { IWalletsBalance, WALLETS_ALICE } from './types';

import {
  fetchWalletsBalanceRequest,
  fetchWalletsNFTRequest,
} from '../../network/wallet';

export const fetchWalletsBalance = createAsyncThunk<any, string, any>(
  `${WALLETS_ALICE}/balance`,
  async (payload) => {
    try {
      const data = await fetchWalletsBalanceRequest(payload);
      console.log(data);
      return data;
    } catch (error) {
      notification.error({ message: 'ошибочка' });
      return {} as IWalletsBalance;
    }
  },
);

export const fetchWalletsNFT = createAsyncThunk(
  `${WALLETS_ALICE}/NFT`,
  async (payload: string) => {
    try {
      const data = await fetchWalletsNFTRequest(payload);
      console.log(data);
      return (data as any).balance;
    } catch (error) {
      notification.error({ message: 'ошибочка' });
      return {} as IWalletsBalance;
    }
  },
);

export const generateNFTAction = createAsyncThunk(
  `${WALLETS_ALICE}/generateNFT`,
  async (payload: string) => {
    try {
      const data = await fetchWalletsNFTRequest(payload);
      console.log(data);
      return (data as any).balance;
    } catch (error) {
      notification.error({ message: 'ошибочка' });
      return {} as IWalletsBalance;
    }
  },
);
