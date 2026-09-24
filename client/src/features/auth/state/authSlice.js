import { createSlice } from "@reduxjs/toolkit";
import { currentLoggedUser, loginUser } from "./authAction";

let initialState = {
    user: null,
    isLoading: false
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
    }
})

export const { addUser, setAccessToken, removeUser } = authSlice.actions
export default authSlice.reducer