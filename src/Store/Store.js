import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./AuthSlice";
import { chatAdminSlice } from "./ChatAdminSlice";
import { chatUserSlice } from "./ChatUserSlice";
import { projectSlice } from "./ProjectSlice";
import { usersSlice } from "./UsersSlice";

const store = configureStore({
    reducer : {
        auth: authSlice.reducer,
        project: projectSlice.reducer,
        chatUser: chatUserSlice.reducer,
        chatAdmin: chatAdminSlice.reducer,
        users: usersSlice.reducer,
    },
});

export default store ;
