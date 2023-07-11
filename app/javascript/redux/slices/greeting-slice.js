import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getGreeting = createAsyncThunk('greeting/getGreeting', async () => {
  const response = await fetch('/random_greeting');
  const greeting = await response.json();
  return greeting;
});

const initialState = {
  greeting: null,
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGreeting.fulfilled, (state, { payload }) => {
      state.greeting = payload;
    });
  },
});

export const selectGreeting = (state) => state.greetingReducer.greeting;

export default greetingSlice.reducer;
