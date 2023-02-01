import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6336f6985327df4c43cd2ee3.mockapi.io/contacts';

export const getNotes = createAsyncThunk(
  'notes/getNotes',
  async (_, thunkAPI) => {
    try {
      const response = await axios('/materials');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createNote = createAsyncThunk(
  'notes/createNote',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('/materials', data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteNote = createAsyncThunk(
  'notes/deleteNote',
  async (noteId, thunkAPI) => {
    try {
      await axios.delete(`/materials/${noteId}`);
      return noteId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateNote = createAsyncThunk(
  'notes/updateNote',
  async (noteId, thunkAPI) => {
    try {
      const response = await axios.put(`/materials/${noteId.id}`, noteId);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
