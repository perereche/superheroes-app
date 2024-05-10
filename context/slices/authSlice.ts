import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { loginUser, registerUser, User, Credentials } from '../services/apiService'; // Define los tipos adecuados
import { saveAccessToken, saveRefreshToken, getRefreshToken } from '../../services/tokenService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SecureStore from "expo-secure-store";

interface AuthState {
    user: User | null;
    status: 'idle' | 'loading' | 'failed';
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    status: 'idle',
    error: null
};

export const login = createAsyncThunk(
    'auth/login',
    async (userData: Credentials, { rejectWithValue }) => {
        try {
            const data = await loginUser(userData);
            await saveAccessToken(data.accessToken);
            await saveRefreshToken(data.refreshToken);
            return data.user;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state.user = null;
            AsyncStorage.removeItem('accessToken');
            SecureStore.deleteItemAsync('refreshToken');
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        });
    }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;