import { configureStore } from '@reduxjs/toolkit';
import wedding from './slices/weddingSlice';
import auth from './slices/authSlice';
import { syncMiddleware } from './syncMiddleware';

export const store = configureStore({
  reducer: { wedding, auth },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(syncMiddleware),
});
