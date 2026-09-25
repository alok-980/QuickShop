import axios from 'axios';
import { store } from '../store';
import { setAccessToken, removeUser } from '../../features/auth/state/authSlice';

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true
})

axiosInstance.interceptors.request.use((config) => {
    const token = store.getState().auth.user?.accessToken;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})

let refreshPromise = null;

axiosInstance.interceptors.response.use(
    (response) => response,

    async (error) => {
        const originalReq = error.config;

        if (originalReq.url === "/auth/refresh-token") {
            store.dispatch(removeUser());
            return Promise.reject(error);
        }

        if (error.response?.status === 401 && !originalReq._retry) {
            originalReq._retry = true;

            try {
                if (!refreshPromise) {
                    refreshPromise = axiosInstance.post("/auth/refresh-token")
                        .finally(() => { refreshPromise = null; });
                }

                const res = await refreshPromise;
                const newAccessToken = res.data.data.accessToken;

                store.dispatch(setAccessToken(newAccessToken));

                originalReq.headers.Authorization = `Bearer ${newAccessToken}`;
                return axiosInstance(originalReq);
            } catch (refreshError) {
                store.dispatch(removeUser());
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
)