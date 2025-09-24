import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "@/api/services/auth";
import { todoApi } from "@/api/services/todo";

import activeItemReduser from "./slice/activeItem/activeItemSlice"
import showFormReduser from "./slice/showForm/showFormSlice"
import authReduser from "./slice/auth/authSlice"

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [todoApi.reducerPath]: todoApi.reducer,

    activeItem: activeItemReduser,
    showForm: showFormReduser,
    auth: authReduser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(todoApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
