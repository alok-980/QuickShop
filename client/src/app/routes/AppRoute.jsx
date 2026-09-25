import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layout/AuthLayout";
import LoginPage from "../../features/auth/ui/pages/LoginPage";
import RegisterPage from "../../features/auth/ui/pages/RegisterPage";
import MainLayout from "../layout/MainLayout";
import ShopPage from "../../features/product/ui/pages/ShopPage";
import SingleProductPage from "../../features/product/ui/pages/SingleProductPage";
import { useDispatch } from "react-redux";
import { currentLoggedUser } from "../../features/auth/state/authAction";
import PublicRoute from "../protectedRoutes/PublicRoute";
import ProtectedRoute from "../protectedRoutes/ProtectedRoute";
import HomePage from "../../shared/ui/pages/HomePage";
import AboutPage from "../../shared/ui/pages/AboutPage";
import ContactUsPage from "../../shared/ui/pages/ContactUsPage";
import Dashboard from "../../features/auth/ui/pages/Dashboard";
import DashboardLayout from "../layout/DashboardLayout";

const AppRoute = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (() => {
      dispatch(currentLoggedUser());
    })();
  }, []);

  const router = createBrowserRouter([
    {
      path: "",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              index: true,
              element: <LoginPage />,
            },
            {
              path: "login",
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },
    {
      path: "",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "home",
              element: <HomePage />,
            },
            {
              path: "products",
              element: <ShopPage />,
            },
            {
              path: "products/:id",
              element: <SingleProductPage />,
            },
            {
              path: "about",
              element: <AboutPage />,
            },
            {
              path: "contact",
              element: <ContactUsPage />,
            },
          ],
        },
        {
          path: "",
          element: <DashboardLayout />,
          children: [
            {
              path: "dashboard",
              element: <Dashboard />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoute;
