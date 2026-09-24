import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../layout/AuthLayout'
import LoginPage from '../../features/auth/ui/pages/LoginPage'
import RegisterPage from '../../features/auth/ui/pages/RegisterPage'
import MainLayout from '../layout/MainLayout'
import ProfilePage from '../../features/auth/ui/pages/ProfilePage'
import ShopPage from '../../features/product/ui/pages/ShopPage'
import SingleProductPage from '../../features/product/ui/pages/SingleProductPage'
import { useDispatch } from 'react-redux'
import { currentLoggedUser } from '../../features/auth/state/authAction'

const AppRoute = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(currentLoggedUser())
    }, [dispatch])

    const router = createBrowserRouter([
        {
            path: '',
            element: <AuthLayout />,
            children: [
                {
                    index: true,
                    element: <LoginPage />
                },
                {
                    path: 'login',
                    element: <LoginPage />
                },
                {
                    path: 'register',
                    element: <RegisterPage />
                }
            ]
        },
        {
            path: '',
            element: <MainLayout />,
            children: [
                {
                    path: 'profile',
                    element: <ProfilePage />
                },
                {
                    path: 'products',
                    element: <ShopPage />
                },
                {
                    path: 'products/:id',
                    element: <SingleProductPage />
                }
            ]
        }
    ])

    return <RouterProvider router={router} />
}

export default AppRoute