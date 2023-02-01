import { createSlice } from '@reduxjs/toolkit';
import {
  getNotes,
  createNote,
  deleteNote,
  updateNote,
} from './notesOperations';

const initialState = {
  notes: [],
  isLoading: false,
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  extraReducers: {
    // ==========getNotes==========
    [getNotes.pending]: state => {
      state.isLoading = true;
    },
    [getNotes.fulfilled]: (state, { payload }) => {
      state.notes = payload;
      state.isLoading = false;
    },
    [getNotes.rejected]: state => {
      state.isLoading = false;
    },

    // ==========addNotes==========
    [createNote.pending]: state => {
      state.isLoading = true;
    },
    [createNote.fulfilled]: (state, { payload }) => {
      state.notes = [...state.notes, payload];
      state.isLoading = false;
    },
    [createNote.rejected]: state => {
      state.isLoading = false;
    },

    // ==========updateNote==========
    [updateNote.pending]: state => {
      state.isLoading = true;
    },
    [updateNote.fulfilled]: (state, { payload }) => {
      state.notes = state.notes.map(item =>
        item.id === payload.id ? { ...item, ...payload } : item
      );
      state.isLoading = false;
    },
    [updateNote.rejected]: state => {
      state.isLoading = false;
    },

    // ==========deleteNote==========
    [deleteNote.pending]: state => {
      state.isLoading = true;
    },
    [deleteNote.fulfilled]: (state, { payload }) => {
      state.notes = state.notes.filter(({ id }) => id !== payload);
      state.isLoading = false;
    },
    [deleteNote.rejected]: state => {
      state.isLoading = false;
    },
  },
  // reducers: {
  //   addNote: (state, { payload }) => {
  //     state.notes.push(payload);
  //   },
  //   updateNote: (state, { payload }) => {
  // state.notes = state.notes.map((item) =>
  //   item.id === payload.id ? { ...item, ...payload } : item
  // );
  //   },
  //   deleteNote: (state, { payload }) => {
  //     state.notes = state.notes.filter((item) => item.id !== payload);
  //   },
  // },
});

// export const { addNote, updateNote, deleteNote } = notesSlice.actions;

export const notesReducer = notesSlice.reducer;
