import { createSlice } from '@reduxjs/toolkit';

export const userLoggedIn = {
    isLoggedIn: true,
    username: 'GulcinGulcu'
}

export const userSlice = createSlice({
    name: 'user',
    initialState: userLoggedIn,
    reducers: {
        login: (state) => {
            return {...state, isLoggedIn: true}
        },
        logout: (state) => {
            return {...state, isLoggedIn: false}
        },
        updateUser: (state, action) => {
            return {...state, username: action.payload}
        }
    } 
}
)

export const { login, logout, updateUser } = userSlice.actions;

export default userSlice.reducer;