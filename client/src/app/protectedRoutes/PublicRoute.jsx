import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import Loader from "../../shared/ui/components/Loader";

const PublicRoute = () => {
  const { user, isLoading } = useSelector((store) => store.auth);

  if (isLoading) return <Loader />

  if (user) return <Navigate to="/products" />;

  return <Outlet />;
};

export default PublicRoute;
