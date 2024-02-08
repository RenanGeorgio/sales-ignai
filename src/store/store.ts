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

import { sessionReducer as session } from "./session/sessionSlice";
import { userReducer as user } from "./user/userSlice";
import { leadsReducer as leads } from "./leads/leadsSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  session,
  user,
  leads,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

let persistor = persistStore(store);

export { sessionActions } from "./session/sessionSlice";
export { userActions } from "./user/userSlice";
export { leadsActions } from "./leads/leadsSlice";

export { persistor, store, rootReducer, storage };