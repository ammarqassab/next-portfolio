import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./AuthSlice";
import { chatAdminSlice } from "./ChatAdminSlice";
import { chatUserSlice } from "./ChatUserSlice";
import { projectSlice } from "./ProjectSlice";

const store = configureStore({
    reducer : {
        auth: authSlice.reducer,
        project: projectSlice.reducer,
        chatUser: chatUserSlice.reducer,
        chatAdmin: chatAdminSlice.reducer,
    },
});

export default store ;
