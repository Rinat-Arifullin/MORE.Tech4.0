import { createSlice } from '@reduxjs/toolkit';
import { IWalletStore, WALLETS_ALICE } from './types';
import { fetchTeamList } from '../Team/thunk';
import { fetchWalletsBalance, fetchWalletsNFT } from './thunk';

const initialState: IWalletStore = {
  loading: false,
  balance: null,

  NFT: null,
};

export const walletBalanceSlice = createSlice({
  name: WALLETS_ALICE,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWalletsBalance.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchWalletsBalance.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.balance = payload;
    });
    builder.addCase(fetchWalletsBalance.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(fetchWalletsNFT.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchWalletsNFT.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.NFT = payload;
    });
    builder.addCase(fetchWalletsNFT.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default walletBalanceSlice.reducer;
