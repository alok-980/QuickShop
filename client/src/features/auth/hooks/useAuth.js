import { useForm } from "react-hook-form";
import { registerUser } from "../apis/authApi.js";
import { useDispatch } from "react-redux"
import { loginUser } from "../state/authAction.js"

export const useAuth = () => {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const handleRegister = async (data) => {
        const res = await registerUser(data)
    };

    const handleLogin = async (data) => {
        dispatch(loginUser(data))
    }

    return {
        register,
        handleSubmit,
        errors,
        handleRegister,
        handleLogin
    }
}