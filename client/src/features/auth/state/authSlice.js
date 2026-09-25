import { createSlice } from "@reduxjs/toolkit";
import { currentLoggedUser, loginUser, logoutUser } from "./authAction";

let initialState = {
    user: null,
    isLoading: true
}

const authSlice = createSlice({
    name: "auth",

    initialState,

    reducers: {
        addUser: (state, action) => {
            state.user = action.payload,
                state.isLoading = false
        },

        setAccessToken: (state, action) => {
            state.user = {
                ...state.user,
                accessToken: action.payload
            };
        },

        removeUser: (state, action) => {
            state.user = null,
                state.isLoading = false
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoading = false
            })
            .addCase(loginUser.rejected, (state) => {
                state.isLoading = false
            })
            .addCase(currentLoggedUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(currentLoggedUser.fulfilled, (state, action) => {
                state.user = {
                    ...state.user,
                    ...action.payload
                };
                state.isLoading = false
            })
            .addCase(currentLoggedUser.rejected, (state) => {
                state.isLoading = false
            })
            .addCase(logoutUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null,
                    state.isLoading = false
            })
            .addCase(logoutUser.rejected, (state) => {
                state.isLoading = false
            })
    }
})

export const { addUser, setAccessToken, removeUser } = authSlice.actions
export default authSlice.reducer