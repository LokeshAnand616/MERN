// import axios from 'axios';

// const API_URL = 'http://localhost:5000'

// const api = axios.create({
//     baseURL:API_URL,
// });

// axios.interceptors.request.use(
//     (config)=>{
//         return config;
//     },
//     (error)=>{
//         return Promise.reject(error);
//     }
// )

// axios.interceptors.response.use(
//     (response)=>{
//         return response;
//     },
//     (error)=>{
//         return Promise.reject(error);
//     }
// )

// export default api;

import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

const API_URL = 'http://localhost:5000'

const api = axios.create({
    baseURL:API_URL,
});

export const fetchTasks = createAsyncThunk('tasks/fetchdata', async () => {
    const response = await api.get('/users');
    return response.data;
})

export const addTask = createAsyncThunk('tasks/postdata',async (task) => {
    const response = await api.get('/users',task);
    return response.data;
})


