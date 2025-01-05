import { createSlice } from "@reduxjs/toolkit";
import SpotifyWebApi from "spotify-web-api-js";

const name = "user";
const initialState = {
  spotify: new SpotifyWebApi(),
};

const userSlice = createSlice({
  name,
  initialState,
});

const userReducer = userSlice.reducer;
export default userReducer;
