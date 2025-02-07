import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { fetchTasks, addTask, deleteTask, updateTask } from "../../api/CRUD";

const priorityOrder = {
  high: 1,
  medium: 2,
  low: 3,
};

const tasksAdapter = createEntityAdapter({
  selectId: (task) => task.id,
  sortComparer: (a, b) => priorityOrder[a.Priority] - priorityOrder[b.Priority],
});

const taskSlice = createSlice({
  name: "tasks",
  initialState: tasksAdapter.getInitialState({
    status: "idle",
    error: null,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        console.log("Fetched Tasks:", action.payload);
        state.status = "succeeded";
        tasksAdapter.setAll(state, action.payload);
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        console.log("Added Task:", action.payload);
        tasksAdapter.addOne(state, action.payload);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        tasksAdapter.removeOne(state, action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        console.log("Updated Task:", action.payload);
        tasksAdapter.updateOne(state, {
          id: action.payload.id,
          changes: action.payload,
        });
      });
  },
});

export const { selectAll: selectAllTasks, selectById: selectTaskById } =
  tasksAdapter.getSelectors((state) => state.tasks);

export default taskSlice.reducer;
