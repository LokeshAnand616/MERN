import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "./api";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await api.get("/users");
  return response.data;
});

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async ({ task, priority }) => {
    const response = await api.post("/users", {
      Task: task,
      Priority: priority,
    });

    console.log("Response from API:", response.data);
    return response.data;
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async ({ id }) => {
    await api.delete(`/users/${id}`);
    return id;
  }
);

export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async ({ id, task, priority }) => {
    const response = await api.put(`/users/${id}`, {
      Task: task,
      Priority: priority,
    });
    return response.data;
  }
);
