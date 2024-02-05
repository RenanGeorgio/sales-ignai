import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { userReducer as user } from "./user/userSlice";
import { sessionReducer as session } from "./session/sessionSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user,
  session,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  // middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware({
  //     serializableCheck: {
  //         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //     }),
});

let persistor = persistStore(store);

export { userActions } from "./user/userSlice";
export { sessionActions } from "./session/sessionSlice";

export { persistor, store, rootReducer };