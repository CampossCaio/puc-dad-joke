import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@src/slices/user";

export const store = configureStore({
  reducer: { user: userReducer },
});
