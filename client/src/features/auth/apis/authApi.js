import { axiosInstance } from "../../../app/config/axiosInstance";

export const registerUser = async (data) => {
    try {
        const res = await axiosInstance.post('/auth/register', data)
        return res.data
    } catch (error) {
        console.log("User registration failed:", error.message)
        throw error
    }
}