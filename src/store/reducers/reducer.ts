import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Task } from '../../interfaces/Task'
import { fetchGetTasks, fetchAddTasks } from '../actions/asyncThunk'

type Loading = 'idle' | 'pending'
type Tab = 'All' | 'Active' | 'Complete'

interface TaskState {
  loading: Loading
  tasks: Task[]
  error: string
  currentPage: number
  currentTab: Tab
  maxAllTab: number
  maxActiveTab: number
  maxCompleteTab: number
}

const initialState: TaskState = {
    loading: 'idle',
    tasks: [],
    error: '',
    currentPage: 1,
    currentTab: 'All',
    maxAllTab: 0,
    maxActiveTab: 0,
    maxCompleteTab: 0,
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    changeCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    changeCurrentTab: (state, action: PayloadAction<Tab>) => {
      state.currentTab = action.payload
    },
    changeNumbersTabs: (state) => {
      state.maxAllTab = state.tasks.length
      state.maxActiveTab = state.tasks.filter((task) => !task.checked).length
      state.maxCompleteTab = state.tasks.filter((task) => task.checked).length
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetTasks.pending, (state) => {
        state.loading = 'pending'
      })
      .addCase(fetchGetTasks.fulfilled, (state, action) => {
        state.loading = 'idle'
        state.tasks = action.payload
        state.maxAllTab = state.tasks.length
        state.maxActiveTab = state.tasks.filter((task) => !task.checked).length
        state.maxCompleteTab = state.tasks.filter((task) => task.checked).length
      })
      .addCase(fetchGetTasks.rejected, (state, action) => {
        state.loading = 'idle'
        state.error = action.payload as string
      })
      .addCase(fetchAddTasks.pending, (state) => {
        state.loading = 'pending'
      })
      .addCase(fetchAddTasks.fulfilled, (state, action) => {
        state.loading = 'idle'
      })
      .addCase(fetchAddTasks.rejected, (state, action) => {
        state.loading = 'idle'
        state.error = action.payload as string
      })
  },
})

export default tasksSlice
