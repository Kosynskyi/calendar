import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, { payload }) => {
      state.notes.push(payload);
    },
    updateNote: (state, { payload }) => {
      state.notes = state.notes.map((item) =>
        item.id === payload.id ? { ...item, ...payload } : item
      );
    },
    deleteNote: (state, { payload }) => {
      state.notes = state.notes.filter((item) => item.id !== payload);
    },
  },
});

export const { addNote, updateNote, deleteNote } = notesSlice.actions;

export const notesReducer = notesSlice.reducer;
