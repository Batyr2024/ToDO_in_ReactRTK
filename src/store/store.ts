import { configureStore } from '@reduxjs/toolkit'
import tasksSlice from './reducers/reducer'

export const setupStore = configureStore({
  reducer: {
    todo: tasksSlice.reducer,
  },
})

export type RootState = ReturnType<typeof setupStore.getState>

export type AppDispatch = typeof setupStore.dispatch
