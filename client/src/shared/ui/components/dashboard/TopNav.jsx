import React from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Search } from "lucide-react";

const TopNav = () => {
  const navigate = useNavigate();

  return (
    <div className="h-16 w-full bg-[#06120c] border-b border-white/10 flex items-center gap-4 px-5">
      <button
        onClick={() => navigate("/products")}
        aria-label="Back to products"
        className="h-9 w-9 shrink-0 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:text-emerald-400 hover:border-emerald-400/40 transition"
      >
        <ArrowLeft size={17} />
      </button>

      <div className="flex-1 max-w-md border border-white/10 bg-white/5 flex items-center gap-2 px-3 py-2 rounded-lg focus-within:border-emerald-400 focus-within:ring-2 focus-within:ring-emerald-400/20 transition">
        <Search size={16} className="text-emerald-400 shrink-0" />
        <input
          type="text"
          placeholder="Search products..."
          className="outline-none bg-transparent text-sm text-white placeholder:text-gray-500 w-full"
        />
      </div>
    </div>
  );
};

export default TopNav;
