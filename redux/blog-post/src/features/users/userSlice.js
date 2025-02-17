import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 0, user: "lokesh" },
  { id: 1, user: "kannan" },
  { id: 2, user: "bala" },
  { id: 3, user: "rathesh" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
export const selectAllUsers = (state) => state.users;
