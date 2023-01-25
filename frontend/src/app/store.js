import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import usageReducer from '../features/usages/usageSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    usages: usageReducer,
  },
})