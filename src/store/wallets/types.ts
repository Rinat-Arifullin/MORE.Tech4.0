export const WALLETS_ALICE = 'walletsAlice' as const;

export interface IWalletsBalance {
  maticAmount: number;
  coinsAmount: number;
}

interface INft {
  URI: string;
  tokens: number[];
}

export interface IWalletStore {
  balance: IWalletsBalance | null;
  NFT: INft[] | null;
  loading: boolean;
}

export interface IGenerateNFTPayload {
  toPublicKey: '0x96B6830692E040F5b53767AA021A3F35e1B4fBF6';
  uri: 'ipfs://bafybeifesqvvmmtcjlmeso3zaqh56mhttgza2eglw7zwy4ryuyifduy4i/images/star.png';
  nftCount: 1;
}
