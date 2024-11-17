import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./services/ApiSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import authSlice from "./features/auth/authSlice";
import albumSlice from "./features/album/albumSlice";
import uiSlice from "./features/ui/uiSlice";

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  authSliceReducer: authSlice.reducer,
  albumSliceReducer: albumSlice.reducer,
  uiSliceReducer: uiSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: [apiSlice.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;

const persistor = persistStore(store);

export { store, persistor };
