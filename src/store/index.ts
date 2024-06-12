import { configureStore } from '@reduxjs/toolkit';
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query';
import { postApi } from './api';
import activeServiceSlice from './activeServiceSlice';

export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    activeService: activeServiceSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
