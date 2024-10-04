import { createSlice } from "@reduxjs/toolkit"
import { Task } from "../../interfaces/Task"
import { fetchGetTasks,fetchAddTasks } from "../actions/asyncThunk"


type Loading = 'idle' | 'pending'

interface TaskState {
    loading: Loading,
    tasks: Task[],
    error: string
}

const initialState:TaskState = {
    loading: "idle",
    tasks: [],
    error: ''
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetTasks.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(fetchGetTasks.fulfilled, (state, action) => {
                state.loading = "idle"
                state.tasks = action.payload;
            })
            .addCase(fetchGetTasks.rejected, (state, action) => {
                state.loading = 'idle';
                state.error = action.payload as string;
            })
            .addCase(fetchAddTasks.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(fetchAddTasks.fulfilled, (state, action) => {
                state.loading = "idle"
                state.tasks = action.payload;
            })
            .addCase(fetchAddTasks.rejected, (state, action) => {
                state.loading = 'idle';
                state.error = action.payload as string;
            })
    },
})

export default tasksSlice