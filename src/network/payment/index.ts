import { makeRequest } from '../instance';

export const fetchPaymentHistoryRequest = () => {
  return makeRequest({
    url: '/paymentHistory',
    method: 'GET',
  });
};
