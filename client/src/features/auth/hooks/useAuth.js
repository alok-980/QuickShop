import { useForm } from "react-hook-form";
import { registerUser } from "../apis/authApi.js";
import { useDispatch } from "react-redux"
import { loginUser, logoutUser } from "../state/authAction.js"
import { useNavigate } from "react-router";
import { useState } from "react";

export const useAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const handleDashboard = () => {
        setIsOpen(false);
        navigate("/dashboard");
    };

    const handleRegister = async (data) => {
        const res = await registerUser(data)
        reset();
        navigate('/login');
    };

    const handleLogin = async (data) => {
        dispatch(loginUser(data))
    }

    const handleLogout = () => {
        setIsOpen(false)
        dispatch(logoutUser())
        navigate("/login")
    }

    return {
        isOpen,
        setIsOpen,
        navigate,
        register,
        handleSubmit,
        errors,
        handleRegister,
        handleLogin,
        handleLogout,
        handleDashboard
    }
}