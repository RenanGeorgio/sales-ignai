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
import emailCombinedReducer from "./email/reducers";
// Email
import { fetchConfiguration } from "@services/email/configuration";
import { loadState } from "@services/email/state";
import debounce from "@services/email/debounce";

const SAVE_STATE_DEBOUNCE_PERIOD_IN_MILLIS = 500;

declare global {
  interface Window {
    isotopeConfiguration: any;
  }
}

const [previousState, configuration] = await Promise.all([
  loadState(),
  fetchConfiguration(),
]).catch((error) => {
  console.error("Failed to load state or configuration", error);
  return [null, null];
});

console.log(configuration, previousState);
window.isotopeConfiguration = configuration;

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  session,
  user,
  leads,
  email: emailCombinedReducer,
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

const persistor = persistStore(store);

export { sessionActions } from "./session/sessionSlice";
export { userActions } from "./user/userSlice";
export { leadsActions } from "./leads/leadsSlice";

export { persistor, store, rootReducer, storage };
