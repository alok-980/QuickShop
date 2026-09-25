import React from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Search } from "lucide-react";

const TopNav = () => {
  const navigate = useNavigate();

  return (
    <div className="h-16 w-full bg-surface-950 border-b border-surface-600/70 flex items-center gap-4 px-5">
      <button
        onClick={() => navigate("/products")}
        aria-label="Back to products"
        className="h-9 w-9 shrink-0 rounded-lg border border-surface-600/70 bg-surface-800/70 flex items-center justify-center text-ink-300 hover:text-brand-300 hover:border-brand-400/40 transition"
      >
        <ArrowLeft size={17} />
      </button>

      <div className="flex-1 max-w-md border border-surface-600/70 bg-surface-800/70 flex items-center gap-2 px-3 py-2 rounded-lg focus-within:border-brand-300 focus-within:ring-2 focus-within:ring-brand-400/20 transition">
        <Search size={16} className="text-brand-300 shrink-0" />
        <input
          type="text"
          placeholder="Search products..."
          className="outline-none bg-transparent text-sm text-ink-100 placeholder:text-ink-500 w-full"
        />
      </div>
    </div>
  );
};

export default TopNav;
