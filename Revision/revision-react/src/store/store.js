import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Features/createSlice"; 

const store = configureStore({
  reducer: {
    counter: counterReducer, 
  },
});

export default store;
