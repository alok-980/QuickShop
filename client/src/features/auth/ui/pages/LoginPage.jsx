import React from "react";
import { useAuth } from "../../hooks/useAuth";

const LoginPage = () => {
  const { register, handleSubmit, errors, handleLogin } = useAuth();

  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit(handleLogin)}>
        <input
          className="border"
          type="text"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address",
            },
          })}
        />
        {errors.name && (
          <p className="text-sm text-red-400">{errors.name.message}</p>
        )}

        <input 
          className="border" 
          type="text" 
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "Password must be 6 character long" }
          })}  
        />
        {errors.email && (
          <p className="text-sm text-red-400">{errors.email.message}</p>
        )}

        <button className="bg-blue-400 px-2 py-1">Sign In</button>
      </form>
    </div>
  );
};

export default LoginPage;
