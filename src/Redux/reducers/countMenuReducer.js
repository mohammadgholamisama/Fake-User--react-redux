import { createSlice } from "@reduxjs/toolkit";

const countMenuReducer = createSlice({
    name: 'countMenu',
    initialState: 0,
    reducers: {
        changeCount: (state, action) => {
            return action.payload
        }
    }
})

export default countMenuReducer.reducer
export const { changeCount } = countMenuReducer.actions