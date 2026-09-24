import React from "react";
import { User } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

const RegisterPage = () => {
  const { register, handleSubmit, errors, handleRegister } = useAuth();

  return (
    <div className="h-screen flex justify-around items-center">
      <h1>User registration</h1>
      <form
        onSubmit={handleSubmit(handleRegister)}
        className="flex flex-col gap-2"
      >
        <div>
          <label htmlFor=""></label>
          <div className="border flex items-baseline px-2 py-1 gap-2 rounded">
            <User size={16} />
            <input
              className="outline-none"
              type="text"
              placeholder="fullname"
              {...register("name", {
                required: "Name is required",
                minLength: { value: 2, message: "Name is too short" },
                maxLength: { value: 30, message: "Name is too long" },
              })}
            />
          </div>
          {errors.name && <p className="text-red-400">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor=""></label>
          <div className="border flex items-baseline px-2 py-1 gap-2 rounded">
            <User size={16} />
            <input
              className="outline-none"
              type="text"
              placeholder="Enter your email address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
            />
          </div>
          {errors.email && (
            <p className="text-red-400">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor=""></label>
          <div className="border flex items-baseline px-2 py-1 gap-2 rounded">
            <User size={16} />
            <input
              className="outline-none"
              type="text"
              placeholder="Enter your email address"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 character long",
                },
              })}
            />
          </div>
          {errors.password && (
            <p className="text-red-400">{errors.password.message}</p>
          )}
        </div>

        <div>
          <label htmlFor=""></label>
          <div className="border flex items-baseline px-2 py-1 gap-2 rounded">
            <User size={16} />
            <input
              className="outline-none"
              type="text"
              placeholder="Enter your email address"
              {...register("confirmPassword", {
                required: "Confirm password is required",
                minLength: {
                  value: 6,
                  message: "confirm password must be 6 character long",
                },
              })}
            />
          </div>
          {errors.confirmPassword && (
            <p className="text-red-400">{errors.confirmPassword.message}</p>
          )}
        </div>

        <button className="bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 cursor-pointer">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
