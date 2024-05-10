import axios, { AxiosRequestConfig, AxiosError } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getRefreshToken, refreshAccessToken, saveAccessToken, saveRefreshToken, TokenResponse } from './tokenService';
import Constants from "expo-constants";

const API_URL_LOCAL = Constants?.expoConfig?.extra?.API_URL_LOCAL;

const api = axios.create({
    baseURL: API_URL_LOCAL,
});

api.interceptors.request.use(
    async (config) => {
        config.headers = config.headers || {};
        const accessToken = await AsyncStorage.getItem('accessToken');
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error: AxiosError) => Promise.reject(error)
);

api.interceptors.response.use(
    response => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const refreshToken = await getRefreshToken();
            if (refreshToken) {
                const data = await refreshAccessToken(refreshToken);
                saveAccessToken(data.accessToken);
                saveRefreshToken(data.refreshToken);
                axios.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
                return api(originalRequest);
            } else {
                Promise.reject(error);
            }

        }
        return Promise.reject(error);
    }
);

export default api;
