import { createSlice } from '@reduxjs/toolkit';
import { ITeamListStore, TEAM_LIST_ALICE } from './type';
import { fetchTeamList } from './thunk';

const initialState: ITeamListStore = {
  loading: false,
  dataSource: [],
};

export const teamListSlice = createSlice({
  name: TEAM_LIST_ALICE,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTeamList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTeamList.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.dataSource = payload;
    });
    builder.addCase(fetchTeamList.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default teamListSlice.reducer;
