import { configureStore } from "@reduxjs/toolkit";
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
import storage from "redux-persist/lib/storage";
import { calendarReducer } from "./Date/slice";
import { notesReducer } from "./Notes/notesSlice";

const persistConfigDate = {
  key: "date",
  storage,
};
const persistConfigNotes = {
  key: "notes",
  storage,
};

const persistedReducerDate = persistReducer(persistConfigDate, calendarReducer);
const persistedReducerNotes = persistReducer(persistConfigNotes, notesReducer);

export const store = configureStore({
  reducer: {
    calendar: persistedReducerDate,
    notes: persistedReducerNotes,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
