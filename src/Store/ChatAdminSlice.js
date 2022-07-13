import { createSlice } from "@reduxjs/toolkit";

export const chatAdminSlice = createSlice({
    name:"chatAdmin",
    initialState:{data: null},
    reducers:{
        addChatAdmin: (state, action) => {
            state.data = action.payload;
        },
        updataChatAdmin: (state, action) => {
            state.data.unshift(action.payload);
        }
    }
});

export const {addChatAdmin, updataChatAdmin} = chatAdminSlice.actions;

export default chatAdminSlice.reducer;
