import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { appSliceReducer } from "../domain/AppSlice";
import logger from "redux-logger";

const combinedReducer = combineReducers({
  globalAppState: appSliceReducer,
});

export const store = configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>; //contains the state of the whole store
export type AppDispatch = typeof store.dispatch; //use this when you need to dispatch any action in lower components
