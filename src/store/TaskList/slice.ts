import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITaskListStore, TASK_LIST_ALICE } from './type';
import { fetchTaskList } from './thunk';
import { ITaskCard } from '../../components/Task/TaskCard';

const initialState: ITaskListStore = {
  loading: false,
  dataSource: [],
  error: null,
};

export const taskListSlice = createSlice({
  name: TASK_LIST_ALICE,
  initialState,
  reducers: {
    addTask: (state, { payload }: PayloadAction<ITaskCard>) => {
      state.dataSource.push(payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTaskList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTaskList.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.dataSource = payload;
    });
    builder.addCase(fetchTaskList.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { addTask } = taskListSlice.actions;
export default taskListSlice.reducer;
