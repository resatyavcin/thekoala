import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import languageReducer from "./slices/languageSlice";
import personReducer from "./slices/personSlice";

export const store = configureStore({
  reducer: {
    language: languageReducer,
    person: personReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper(() => store);
