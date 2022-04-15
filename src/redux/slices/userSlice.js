import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: undefined
}

export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {

    }
})

export default userSlice.reducer;