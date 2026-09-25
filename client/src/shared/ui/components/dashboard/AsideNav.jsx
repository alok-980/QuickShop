import React from "react";
import { NavLink } from "react-router";
import { Leaf, LayoutDashboard, Package, User } from "lucide-react";

const links = [
  { label: "Dashboard", to: "/dashboard", icon: LayoutDashboard },
  { label: "Product", to: "/dashboard/product", icon: Package },
  { label: "Profile", to: "/dashboard/profile", icon: User },
];

const AsideNav = () => {
  return (
    <aside className="h-screen w-60 bg-[#06120c] border-r border-white/10 flex flex-col">
      <div className="flex items-center gap-2 px-5 py-10 h-16">
        <span className="h-8 w-8 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center">
          <Leaf size={16} className="text-emerald-400" />
        </span>
        <span className="text-white font-bold tracking-wide uppercase text-sm">
          QuickShop
        </span>
      </div>

      <nav className="flex flex-col gap-1 p-3">
        {links.map(({ label, to, icon: Icon }) => (
          <NavLink
            key={label}
            to={to}
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                isActive
                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-400/30"
                  : "text-gray-400 border border-transparent hover:bg-white/5 hover:text-white"
              }`
            }
          >
            <Icon size={17} />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default AsideNav;
