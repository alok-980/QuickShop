import { useForm } from "react-hook-form";
import { registerUser } from "../apis/authApi.js";

export const useAuth = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const handleRegister = async (data) => {
        const res = await registerUser(data)
    };

    return {
        register,
        handleSubmit,
        errors,
        handleRegister
    }
}