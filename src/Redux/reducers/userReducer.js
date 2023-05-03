import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk(
    'USER_FETCH',
    async () => {
        const response = await fetch('https://randomuser.me/api/')
        const data = await response.json()
        return data

    }
)

const initialState = {
    users: [],
    loading: false,
    error: null
}

const UsersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true

            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false
                state.users = action.payload
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }

})

export default UsersSlice.reducer


