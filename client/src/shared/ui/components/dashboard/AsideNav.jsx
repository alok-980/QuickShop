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
    <aside className="h-screen w-60 bg-surface-950 border-r border-surface-600/70 flex flex-col">
      <div className="flex items-center gap-2 px-5 py-10 h-16">
        <span className="h-8 w-8 rounded-lg bg-brand-500/20 border border-brand-400/40 flex items-center justify-center">
          <Leaf size={16} className="text-brand-300" />
        </span>
        <span className="text-ink-100 font-bold tracking-wide uppercase text-sm">
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
                  ? "bg-brand-500/10 text-brand-300 border border-brand-400/30"
                  : "text-ink-300 border border-transparent hover:bg-surface-800/70 hover:text-ink-100"
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
