import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../app/features/Todo/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});
