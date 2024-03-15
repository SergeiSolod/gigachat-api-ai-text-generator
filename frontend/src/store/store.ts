import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainReducer from "src/modules/main/store/MainSlice";

const rootReducer = combineReducers({
  main: mainReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
