import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../app/config/axiosInstance";

export const loginUser = createAsyncThunk(
    "auth/login",
    async (credentials, thunkApi) => {
        try {
            let res = await axiosInstance.post("/auth/login", credentials)
            return res.data.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

export const currentLoggedUser = createAsyncThunk(
    "auth/me",
    async (_, thunkApi) => {
        try {
            let res = await axiosInstance.get("/auth/me")
            return res.data.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)