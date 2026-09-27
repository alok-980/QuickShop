import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { axiosInstance } from "../../../app/config/axiosInstance";

const getErrorMessage = (error) => {
  const data = error?.response?.data;
  if (data?.errors?.length) return data.errors[0].msg;
  return data?.message || "Something went wrong";
};

export const loginUser = createAsyncThunk(
    "auth/login",
    async (credentials, thunkApi) => {
        try {
            let res = await axiosInstance.post("/auth/login", credentials)
            toast.success(res.data.message);
            return res.data.data
        } catch (error) {
            toast.error(getErrorMessage(error));
            return thunkApi.rejectWithValue(error)
        }
    }
)

export const logoutUser = createAsyncThunk(
    "auth/logout",
    async (_, thunkApi) => {
        try {
            await axiosInstance.post("/auth/logout")
            toast.success(res.data.message);
        } catch (error) {
            toast.error(getErrorMessage(error));
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