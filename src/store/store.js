import { configureStore } from "@reduxjs/toolkit";
import spotifyReducer from "./spotifySlice";

const store = configureStore({
  reducer: { spotifyReducer },
});

export default store;
