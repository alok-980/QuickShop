import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';
import Loader from '../../shared/ui/components/Loader';

const ProtectedRoute = () => {
  const { user, isLoading } = useSelector((store) => store.auth);

  if (isLoading) return <Loader />

  if (!user) return <Navigate to="/login" />;

  return <Outlet />;
}

export default ProtectedRoute