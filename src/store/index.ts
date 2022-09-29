import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/userSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
    reducer: persistedReducer,

})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;