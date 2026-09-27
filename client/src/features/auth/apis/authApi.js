import { axiosInstance } from "../../../app/config/axiosInstance";
import { toast } from "react-toastify";

const getErrorMessage = (error) => {
    const data = error?.response?.data;
    if (data?.errors?.length) return data.errors[0].msg;
    return data?.message || "Something went wrong";
};

export const registerUser = async (data) => {
    try {
        const res = await axiosInstance.post('/auth/register', data)
        toast.success(res.data.message);
        return res.data
    } catch (error) {
        toast.error(getErrorMessage(error));
        console.log("User registration failed:", error.message)
        throw error
    }
}