import React, { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Leaf,
  Truck,
  ShoppingBasket,
} from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

const RegisterPage = () => {
  const { register, handleSubmit, errors, handleRegister } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="h-screen w-full flex bg-surface-950 overflow-hidden">
      <div className="hidden lg:flex lg:w-[50%] relative">
        <img
          src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1600&q=80"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-950 via-surface-950/50 to-brand-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface-950" />

        <div className="relative z-10 flex flex-col justify-between p-10 w-full">
          <div className="flex items-center gap-2">
            <span className="h-9 w-9 rounded-lg bg-brand-500/20 border border-brand-400/40 flex items-center justify-center">
              <Leaf size={18} className="text-brand-300" />
            </span>
            <span className="text-ink-100 font-bold tracking-wide uppercase text-sm">
              FreshCart
            </span>
          </div>

          <div className="max-w-md">
            <p className="text-brand-300 text-xs font-semibold uppercase tracking-widest">
              Farm to your doorstep
            </p>
            <h1 className="text-ink-100 text-4xl lg:text-5xl font-bold leading-tight mt-3">
              Fresh fruits &<br />
              <span className="text-brand-300">vegetables daily.</span>
            </h1>
            <p className="text-ink-300 mt-4 text-sm">
              Join FreshCart and get farm-fresh produce delivered straight to
              your home.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="h-11 w-11 rounded-lg bg-surface-800/70 border border-surface-600/70 flex items-center justify-center">
                <Leaf size={18} className="text-brand-300" />
              </span>
              <div>
                <p className="text-ink-100 text-sm font-semibold">100% Organic</p>
                <p className="text-ink-300 text-xs">
                  Sourced directly from trusted farms.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-11 w-11 rounded-lg bg-surface-800/70 border border-surface-600/70 flex items-center justify-center">
                <Truck size={18} className="text-brand-300" />
              </span>
              <div>
                <p className="text-ink-100 text-sm font-semibold">
                  Fast delivery
                </p>
                <p className="text-ink-300 text-xs">
                  Get your order at your doorstep same day.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-11 w-11 rounded-lg bg-surface-800/70 border border-surface-600/70 flex items-center justify-center">
                <ShoppingBasket size={18} className="text-brand-300" />
              </span>
              <div>
                <p className="text-ink-100 text-sm font-semibold">Best prices</p>
                <p className="text-ink-300 text-xs">
                  Quality produce at prices you'll love.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT — registration form */}
      <div className="w-full lg:w-[50%] flex justify-center items-center px-4">
        <div className="w-full max-w-[400px]">
          <h1 className="text-2xl font-bold text-ink-100 text-center mb-1">
            Create your account
          </h1>
          <p className="text-ink-300 text-sm text-center mb-6">
            Sign up to start shopping fresh produce.
          </p>

          <form
            onSubmit={handleSubmit(handleRegister)}
            className="flex flex-col gap-4"
          >
            <div>
              <label
                htmlFor="name"
                className="text-xs text-ink-300 mb-1 block"
              >
                Full name
              </label>
              <div className="border border-surface-600/70 bg-surface-800/70 flex items-center px-3 py-2 gap-2 rounded-lg focus-within:border-brand-300 focus-within:ring-2 focus-within:ring-brand-400/20 transition">
                <User size={16} className="text-brand-300 shrink-0" />
                <input
                  id="name"
                  className="outline-none bg-transparent text-sm text-ink-100 placeholder:text-ink-500 w-full"
                  type="text"
                  placeholder="Full name"
                  {...register("name", {
                    required: "Name is required",
                    minLength: { value: 2, message: "Name is too short" },
                    maxLength: { value: 30, message: "Name is too long" },
                  })}
                />
              </div>
              {errors.name && (
                <p className="text-danger-400 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-xs text-ink-300 mb-1 block"
              >
                Email address
              </label>
              <div className="border border-surface-600/70 bg-surface-800/70 flex items-center px-3 py-2 gap-2 rounded-lg focus-within:border-brand-300 focus-within:ring-2 focus-within:ring-brand-400/20 transition">
                <Mail size={16} className="text-brand-300 shrink-0" />
                <input
                  id="email"
                  className="outline-none bg-transparent text-sm text-ink-100 placeholder:text-ink-500 w-full"
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
                <p className="text-danger-400 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="text-xs text-ink-300 mb-1 block"
              >
                Password
              </label>
              <div className="border border-surface-600/70 bg-surface-800/70 flex items-center px-3 py-2 gap-2 rounded-lg focus-within:border-brand-300 focus-within:ring-2 focus-within:ring-brand-400/20 transition">
                <Lock size={16} className="text-brand-300 shrink-0" />
                <input
                  id="password"
                  className="outline-none bg-transparent text-sm text-ink-100 placeholder:text-ink-500 w-full"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be 6 character long",
                    },
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="text-ink-500 hover:text-ink-300 shrink-0"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-danger-400 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="text-xs text-ink-300 mb-1 block"
              >
                Confirm password
              </label>
              <div className="border border-surface-600/70 bg-surface-800/70 flex items-center px-3 py-2 gap-2 rounded-lg focus-within:border-brand-300 focus-within:ring-2 focus-within:ring-brand-400/20 transition">
                <Lock size={16} className="text-brand-300 shrink-0" />
                <input
                  id="confirmPassword"
                  className="outline-none bg-transparent text-sm text-ink-100 placeholder:text-ink-500 w-full"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Re-enter your password"
                  {...register("confirmPassword", {
                    required: "Confirm password is required",
                    minLength: {
                      value: 6,
                      message: "confirm password must be 6 character long",
                    },
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  aria-label={
                    showConfirmPassword ? "Hide password" : "Show password"
                  }
                  className="text-ink-500 hover:text-ink-300 shrink-0"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={16} />
                  ) : (
                    <Eye size={16} />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-danger-400 text-xs mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <button className="bg-brand-600 text-ink-100 font-semibold py-2 rounded-lg hover:bg-brand-500 transition-colors cursor-pointer mt-2">
              Sign Up
            </button>
          </form>

          <p className="text-center text-ink-300 text-sm mt-6">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-brand-300 font-semibold hover:text-brand-200"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
