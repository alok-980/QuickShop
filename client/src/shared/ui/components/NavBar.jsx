import React, { useState } from "react";
import { Leaf, Menu, X } from "lucide-react";
import ProfileModel from "../../../features/auth/ui/components/ProfileModel";

const navLinks = [
  { label: "Home", href: "/home" },
  { label: "Shop", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#06120c]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        {/* brand */}
        <a href="/" className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center">
            <Leaf size={16} className="text-emerald-400" />
          </span>
          <span className="text-white font-bold tracking-wide uppercase text-sm">
            QuickShop
          </span>
        </a>

        {/* desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-gray-300 hover:text-emerald-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* right side */}
        <div className="flex items-center gap-3">
          <ProfileModel />

          {/* mobile menu toggle */}
          <button
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden h-9 w-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:text-emerald-400 hover:border-emerald-400/40 transition"
          >
            {isOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      {/* mobile links */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 px-4 py-3 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm text-gray-300 hover:text-emerald-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
