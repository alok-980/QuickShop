import React from "react";
import { useSelector } from "react-redux";
import { User, LayoutDashboard, LogOut } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

const ProfileModel = () => {
  const { isOpen, setIsOpen, handleLogout, handleDashboard } = useAuth();

  const user = useSelector((state) => state.auth.user.user);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        aria-label="Profile"
        aria-expanded={isOpen}
        className="h-9 w-9 rounded-full border border-surface-600/70 bg-surface-800/70 flex items-center justify-center text-ink-300 hover:text-brand-300 hover:border-brand-400/40 transition"
      >
        <User size={17} />
      </button>

      {isOpen && (
        // pt-2 (not mt-2) keeps the gap part of this element's own box,
        // so the mouse never actually leaves the hover area while crossing it
        <div className="absolute right-0 top-full pt-2 w-64">
          <div className="rounded-xl border border-surface-600/70 bg-surface-900 shadow-xl shadow-black/40 overflow-hidden">
            {/* user info */}
            <div className="flex items-center gap-3 px-4 py-4 border-b border-surface-600/70">
              <span className="h-10 w-10 rounded-full bg-brand-500/20 border border-brand-400/40 flex items-center justify-center text-brand-300 font-semibold text-sm shrink-0">
                {user?.name ? (
                  user.name.charAt(0).toUpperCase()
                ) : (
                  <User size={16} />
                )}
              </span>
              <div className="min-w-0">
                <p className="text-ink-100 text-sm font-semibold truncate">
                  {user?.name || "Guest"}
                </p>
                <p className="text-ink-300 text-xs truncate">
                  {user?.email || "Not signed in"}
                </p>
              </div>
            </div>

            {/* actions */}
            <div className="p-2 flex flex-col gap-1">
              <button
                onClick={handleDashboard}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-ink-300 hover:bg-brand-500/10 hover:text-brand-300 transition-colors"
              >
                <LayoutDashboard size={16} />
                Dashboard
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-danger-400 hover:bg-danger-500/10 transition-colors"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileModel;
