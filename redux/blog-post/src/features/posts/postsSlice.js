import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, title: "my learning", content: "learning react and redux" },
    { id: 2, title: "my hobby", content: "playing games" },
];

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId,
                    },
                };
            },
        },
    },
});

export const { addPost } = postsSlice.actions;
export const selectAll = (state) => state.posts;  
export default postsSlice.reducer;
