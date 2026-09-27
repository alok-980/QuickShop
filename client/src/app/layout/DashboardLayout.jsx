import React, { useState } from "react";
import { Outlet } from "react-router";
import AsideNav from "../../shared/ui/components/dashboard/AsideNav";
import TopNav from "../../shared/ui/components/dashboard/TopNav";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface-950 overflow-hidden">
      <AsideNav
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="fixed top-0 left-0 right-0 lg:left-60 z-20">
        <TopNav onMenuClick={() => setIsSidebarOpen(true)} />
      </div>

      <main className="lg:ml-60 mt-16 h-[calc(100vh-4rem)] overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
