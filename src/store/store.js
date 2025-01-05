import { configureStore } from "@reduxjs/toolkit";
import spotifyReducer from "./spotifySlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: { spotifyReducer, userReducer },
});

export default store;
