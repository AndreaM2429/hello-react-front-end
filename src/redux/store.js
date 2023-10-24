import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greeting/GreetingSlice.js';

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});

export default store;
