import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'http://localhost:3000/api/greetings';

export const fetchGreeting = createAsyncThunk(
  'greeting/fetchgreeting',
  async () => {
    try {
      const response = await fetch(url);
      return response.json() || [];
    } catch (error) {
      return 'There was an error and no greeting was returned';
    }
  },
);

const initialState = {
  greeting: [],
  status: 'loading'
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers(builder) {
    builder
    .addCase(fetchGreeting.pending, (state) => {
      state.status = 'Loading';
    })
    .addCase(fetchGreeting.fulfilled, (state, action) => {
      state.status = 'Succeded';
      state.greeting = action.payload
    })
    .addCase(fetchGreeting.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export default greetingSlice.reducer;
