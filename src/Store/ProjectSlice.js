import { createSlice } from "@reduxjs/toolkit";

export const projectSlice = createSlice({
    name:"project",
    initialState:{data: null},
    reducers:{
        addProject: (state, action) => {
            state.data = action.payload.sort(function(a, b){return a.number-b.number});
        },
        updataProject: (state, action) => {
            state.data.push(action.payload);
        },
        deleteProject: (state, action) => {
            state.data.splice(action.payload, 1);
        },
        editProject: (state, action) => {
            state.data.splice(action.payload[0] - 1, 1, action.payload[1]);
        }
    }
});

export const {addProject, updataProject, deleteProject, editProject} = projectSlice.actions;

export default projectSlice.reducer;
