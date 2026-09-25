import React from "react";
import { Outlet } from "react-router";
import AsideNav from "../../shared/ui/components/dashboard/AsideNav";
import TopNav from "../../shared/ui/components/dashboard/TopNav";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-surface-950">
      <div className="fixed inset-y-0 left-0 w-60 z-30">
        <AsideNav />
      </div>

      <div className="fixed top-0 left-60 right-0 z-20">
        <TopNav />
      </div>

      <main className="ml-60 mt-16 h-[calc(100vh-4rem)] overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
