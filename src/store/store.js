import { configureStore } from "@reduxjs/toolkit";
import spotifyReducer from "./spotifySlice";
import userReducer from "./userSlice";
import trackReducer from "./trackSlice";

const store = configureStore({
  reducer: { spotifyReducer, userReducer, trackReducer },
});

export default store;
