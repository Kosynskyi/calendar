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
  },
});

export const { addNote } = notesSlice.actions;

export const notesReducer = notesSlice.reducer;
