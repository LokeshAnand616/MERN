import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { sub } from 'date-fns';
import axios from "axios";

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
    posts: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get(POSTS_URL);
    return response.data;
})

export const addNewPost = createAsyncThunk('posts/addNewPost', async (initialPost) => {
    const response = await axios.post(POSTS_URL, initialPost);
    return response.data;
})

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: {
            reducer(state, action) {
                state.posts.push(action.payload);
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId,
                    },
                };
            },
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                let min = 1;
                const loadedPosts = action.payload.map(post => {
                    post.date = sub(new Date(), { minutes: min++ }).toISOString();
                    return post;
                });
                state.posts = state.posts.concat(loadedPosts);
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addNewPost.fulfilled, (state, action) => {
                const sortedPosts = [...state.posts].sort((a, b) => a.id - b.id);
                action.payload.id = sortedPosts.length > 0 ? sortedPosts[sortedPosts.length - 1].id + 1 : 1;
                action.payload.userId = Number(action.payload.userId);
                action.payload.date = new Date().toISOString();
                state.posts.push(action.payload);
            });
    }
});

export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;
export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;
