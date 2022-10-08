import { createSlice } from '@reduxjs/toolkit';
import { ISeasonHistoryStore, SEASON_HISTORY_ALIAS } from './type';
import { fetchSeasonHistory } from './thunk';

const initialState: ISeasonHistoryStore = {
  loading: false,
  error: null,
  dataSource: [],
};

export const seasonHistorySlice = createSlice({
  name: SEASON_HISTORY_ALIAS,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSeasonHistory.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchSeasonHistory.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.dataSource = payload;
    });

    builder.addCase(fetchSeasonHistory.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default seasonHistorySlice.reducer;
