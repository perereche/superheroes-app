import AsyncStorage from '@react-native-async-storage/async-storage';
import SecureStore from 'expo-secure-store';
import api from './middleware';

export const getRefreshToken = async (): Promise<string | null> => {
    return await SecureStore.getItemAsync('refreshToken');
};

export const saveAccessToken = async (accessToken: string): Promise<void> => {
    await AsyncStorage.setItem('accessToken', accessToken);
};

export const saveRefreshToken = async (refreshToken: string): Promise<void> => {
    await SecureStore.setItemAsync('refreshToken', refreshToken);
};

export const refreshAccessToken = async (refreshToken: string): Promise<TokenResponse> => {
    const response = await api.post<TokenResponse>('/refresh', { refreshToken });
    return response.data;
};

export interface TokenResponse {
    accessToken: string;
    refreshToken: string;
}
