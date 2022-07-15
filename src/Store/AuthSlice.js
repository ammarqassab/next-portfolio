import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name:"auth",
<<<<<<< HEAD
    initialState:{data: null, middleware:"Admin"},
=======
    initialState:{data: null,middleware:"Admin"},
>>>>>>> 72d8dcbd25eec3f82758bfc2c7f3154d775f6d01
    reducers:{
        addAuth: (state, action) => {
            state.data = action.payload;
        },
        addMiddleware: (state, action) => {
            state.middleware = action.payload;
        }
    }
});

export const {addAuth, addMiddleware} = authSlice.actions;

export default authSlice.reducer;
