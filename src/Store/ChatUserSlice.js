import { createSlice } from "@reduxjs/toolkit";

export const chatUserSlice = createSlice({
    name:"chatUser",
    initialState:{data: null},
    reducers:{
        addChatUser: (state, action) => {
            state.data = action.payload;
        },
        updataChatUser: (state, action) => {
            state.data.unshift(action.payload);
        }
    }
});

export const {addChatUser, updataChatUser} = chatUserSlice.actions;

export default chatUserSlice.reducer;
