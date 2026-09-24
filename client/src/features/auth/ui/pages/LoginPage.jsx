import React, { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Leaf,
  Truck,
  ShoppingBasket,
} from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

const LoginPage = () => {
  const { register, handleSubmit, errors, handleLogin } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-screen w-full flex bg-[#06120c] overflow-hidden">
      <div className="hidden lg:flex lg:w-[50%] relative">
        <img
          src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1600&q=80"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06120c] via-[#06120c]/50 to-emerald-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#06120c]" />

        <div className="relative z-10 flex flex-col justify-between p-10 w-full">
          <div className="flex items-center gap-2">
            <span className="h-9 w-9 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center">
              <Leaf size={18} className="text-emerald-400" />
            </span>
            <span className="text-white font-bold tracking-wide uppercase text-sm">
              FreshCart
            </span>
          </div>

          <div className="max-w-md">
            <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest">
              Welcome back
            </p>
            <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight mt-3">
              Fresh fruits &<br />
              <span className="text-emerald-400">vegetables daily.</span>
            </h1>
            <p className="text-gray-300 mt-4 text-sm">
              Sign in to continue shopping farm-fresh produce from FreshCart.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="h-11 w-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <Leaf size={18} className="text-emerald-400" />
              </span>
              <div>
                <p className="text-white text-sm font-semibold">100% Organic</p>
                <p className="text-gray-400 text-xs">
                  Sourced directly from trusted farms.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-11 w-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <Truck size={18} className="text-emerald-400" />
              </span>
              <div>
                <p className="text-white text-sm font-semibold">
                  Fast delivery
                </p>
                <p className="text-gray-400 text-xs">
                  Get your order at your doorstep same day.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-11 w-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <ShoppingBasket size={18} className="text-emerald-400" />
              </span>
              <div>
                <p className="text-white text-sm font-semibold">Best prices</p>
                <p className="text-gray-400 text-xs">
                  Quality produce at prices you'll love.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT — login form */}
      <div className="w-full lg:w-[50%] flex justify-center items-center px-4">
        <div className="w-full max-w-[400px]">
          <h1 className="text-2xl font-bold text-white text-center mb-1">
            Welcome back
          </h1>
          <p className="text-gray-400 text-sm text-center mb-6">
            Sign in to continue shopping fresh produce.
          </p>

          <form
            onSubmit={handleSubmit(handleLogin)}
            className="flex flex-col gap-4"
          >
            <div>
              <label
                htmlFor="email"
                className="text-xs text-gray-400 mb-1 block"
              >
                Email address
              </label>
              <div className="border border-white/10 bg-white/5 flex items-center px-3 py-2 gap-2 rounded-lg focus-within:border-emerald-400 focus-within:ring-2 focus-within:ring-emerald-400/20 transition">
                <Mail size={16} className="text-emerald-400 shrink-0" />
                <input
                  id="email"
                  className="outline-none bg-transparent text-sm text-white placeholder:text-gray-500 w-full"
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
                <p className="text-red-400 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="text-xs text-gray-400 mb-1 block"
              >
                Password
              </label>
              <div className="border border-white/10 bg-white/5 flex items-center px-3 py-2 gap-2 rounded-lg focus-within:border-emerald-400 focus-within:ring-2 focus-within:ring-emerald-400/20 transition">
                <Lock size={16} className="text-emerald-400 shrink-0" />
                <input
                  id="password"
                  className="outline-none bg-transparent text-sm text-white placeholder:text-gray-500 w-full"
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
                  className="text-gray-500 hover:text-gray-300 shrink-0"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between -mt-1">
              <label className="flex items-center gap-2 text-xs text-gray-400 cursor-pointer">
                <input
                  type="checkbox"
                  className="accent-emerald-500"
                  {...register("remember")}
                />
                Remember me
              </label>
              <a
                href="/forgot-password"
                className="text-xs text-emerald-400 hover:text-emerald-300"
              >
                Forgot password?
              </a>
            </div>

            <button className="bg-emerald-600 text-white font-semibold py-2 rounded-lg hover:bg-emerald-500 transition-colors cursor-pointer mt-2">
              Sign In
            </button>
          </form>

          <p className="text-center text-gray-400 text-sm mt-6">
            Don&apos;t have an account?{" "}
            <a
              href="/register"
              className="text-emerald-400 font-semibold hover:text-emerald-300"
            >
              Create account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
