export interface IPaymentItem {
  operation: string;
  name: string;
  status: string;
  sum: string;
  data: string;
}

export interface IPaymentHistoryStore {
  loading: boolean;
  error: Error | null;
  dataSource: IPaymentItem[];
}

export const PAYMENT_HISTORY_ALIAS = 'paymentHistory' as const;
