import axios from 'axios';
import { store } from '../store';
import { setAccessToken, removeUser } from '../../features/auth/state/authSlice';

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api',
    withCredentials: true
})

axiosInstance.interceptors.request.use((config) => {
    const token = store.getState().auth.user?.accessToken;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})

axiosInstance.interceptors.response.use(
    (response) => response,

    async (error) => {
        const originalReq = error.config;

        if (error.response?.status === 401 && !originalReq._retry) {
            originalReq._retry = true

            try {
                const res = await axiosInstance.post("/auth/refresh-token")
                const newAccessToken = res.data.data.accessToken

                store.dispatch(setAccessToken(newAccessToken))

                originalReq.headers.Authorization = `Bearer ${newAccessToken}`

                return axiosInstance(originalReq)
            } catch (refreshError) {
                store.dispatch(removeUser());
                window.location.href = '/login'
                return Promise.reject(refreshError)
            }
        }

        return Promise.reject(error);
    }
)