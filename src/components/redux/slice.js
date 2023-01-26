import { createSlice } from "@reduxjs/toolkit";
import { monthList } from "../../data/month";

const initialState = {
  currentMonth: new Date().getMonth(),
  currentYear: new Date().getFullYear(),
  // currentDay: new Date().getDate(),
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    previousMonth: (state) => {
      state.currentMonth -= 1;
      if (state.currentMonth < 0) {
        state.currentMonth = 11;
        state.currentYear -= 1;
      }
    },
    nextMonth: (state) => {
      state.currentMonth += 1;
      if (state.currentMonth > monthList.length - 1) {
        state.currentMonth = 0;
        state.currentYear += 1;
      }
    },
  },
});

export const { previousMonth, nextMonth } = calendarSlice.actions;

export const calendarReducer = calendarSlice.reducer;
