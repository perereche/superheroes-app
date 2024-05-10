import { configureStore } from '@reduxjs/toolkit';
import heroesReducer from './slices/heroesSlice';

export const store = configureStore({
    reducer: {
        heroes: heroesReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;