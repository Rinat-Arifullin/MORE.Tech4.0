import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import paymentHistoryReducer from './PaymentHistory/slice';

export const store = configureStore({
  reducer: {
    paymentHistory: paymentHistoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
