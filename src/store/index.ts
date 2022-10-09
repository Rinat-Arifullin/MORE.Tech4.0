import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import paymentHistoryReducer from './PaymentHistory/slice';
import seasonHistoryReducer from './SeasonHistory/slice';
import teamListReducer from './Team/slice';
import taskListReducer from './TaskList/slice';
import walletBalanceReducer from './wallets/slice';

export const store = configureStore({
  reducer: {
    paymentHistory: paymentHistoryReducer,
    seasonHistory: seasonHistoryReducer,
    teamList: teamListReducer,
    taskList: taskListReducer,
    wallet: walletBalanceReducer,
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
