import { RootState } from '../index';

export const getWalletBalance = (store: RootState) => store.wallet.balance;
export const getWalletLoading = (store: RootState) => store.wallet.loading;
