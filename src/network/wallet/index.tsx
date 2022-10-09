import { makeRequest } from '../instance';
import { IGenerateNFTPayload } from '../../store/wallets/types';

export const fetchWalletsBalanceRequest = (publicKey: string) => {
  return makeRequest({
    url: `/v1/wallets/${publicKey}/balance`,
    method: 'GET',
  });
};

export const fetchWalletsNFTRequest = (publicKey: string) => {
  return makeRequest({
    url: `/v1/wallets/${publicKey}/nft/balance`,
    method: 'GET',
  });
};

export const generateNFTRequest = (data: IGenerateNFTPayload) => {
  return makeRequest({
    url: `/v1/nft/generate`,
    method: 'POST',
    data,
  });
};
