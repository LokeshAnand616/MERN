// import { createSlice, nanoid } from "@reduxjs/toolkit";
// const initialState = [];
// const taskSlice = createSlice({
//   name: "taskSlice",
//   initialState,
//   reducers: {
//     addTask: {
//       reducer(state, action) {
//         state.push(action.payload);
//       },
//       prepare(task, priority) {
//         return {
//           payload: {
//             id: nanoid(),
//             task,
//             priority,
//           },
//         };
//       },
//     },
//     deleteTask:{
//         reducer(state,action){
//             return state.filter(item => item.id !== action.payload.id)
//         }
//     }
//   },
// });
// export const selectAllTask = (state) => state.tasks || [];
// export default taskSlice.reducer;
// export const {addTask, deleteTask} = taskSlice.actions;

import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { addTask, fetchTasks } from "../../core/api";

const tasksAdapter = createEntityAdapter({
  selectId: (task) => task.id,
  sortComparer: (a, b) => a.priority - b.priority,
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
      .addCase(fetchTasks.fulfilled, (state) => {
        state.status = "succeeded";
        tasksAdapter.setAll(state, action.payload);
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addTask.fulfilled, tasksAdapter.addOne);
  },
});

export const { selectAll: selectAllTasks, selectById: selectTaskById } = tasksAdapter.getSelectors(
    (state) => state.tasks
);

export default taskSlice.reducer;