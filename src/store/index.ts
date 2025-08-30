import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import pointsSlice from "./slices/point-summary";
import purchasesSlice from "./slices/purchases";
import tokenInfoSlice from "./slices/token";
import usersInfoSlice from "./slices/users";
const rootReducer = combineReducers({
  tokenInfo: tokenInfoSlice,
  users: usersInfoSlice,
  points: pointsSlice,
  purchases: purchasesSlice,
});
const persistConfig = {
  key: "root",
  storage,
  blacklist: [],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, REGISTER, PAUSE, PERSIST, PURGE],
      },
    }),
});

export type RootState = ReturnType<typeof rootReducer>;
export const persistor = persistStore(store);
