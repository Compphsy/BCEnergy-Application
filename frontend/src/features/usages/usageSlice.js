import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import usageService from './usageService'

const initialState = {
    usages: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message:'',
}


// Get user usages
export const getUsages = createAsyncThunk(
    'usage/getUsages',
    async (_, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token
        return await usageService.getUsages(token)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
  )

  export const usageSlice = createSlice({
        name: 'usage',
        initialState,
        reducers: {
            reset: (state) =>  initialState
        },
        extraReducers: (Builder) => {
            Builder.addCase(getUsages.pending, (state) => {
                state.isLoading = true
                state.isSuccess = false
                state.isError = false
                state.message = ''
            })
            Builder.addCase(getUsages.fulfilled, (state, {payload}) => {
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.usages = payload
            })
            Builder.addCase(getUsages.rejected, (state, {payload}) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = payload
            })

           
        }
    })
    
    export const {reset} = usageSlice.actions
    export default usageSlice.reducer
