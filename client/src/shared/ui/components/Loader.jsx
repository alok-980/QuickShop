import React from "react";
import { Leaf } from "lucide-react";

const Loader = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-4 bg-[#06120c]">
      <div className="relative h-16 w-16 flex items-center justify-center">
        <span className="absolute inset-0 rounded-full border-4 border-emerald-500/20" />
        <span className="absolute inset-0 rounded-full border-4 border-transparent border-t-emerald-400 animate-spin" />
        <Leaf size={22} className="text-emerald-400" />
      </div>
      <p className="text-sm text-gray-400">Loading...</p>
    </div>
  );
};

export default Loader;
