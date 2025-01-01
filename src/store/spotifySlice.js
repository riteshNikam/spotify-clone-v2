import { createSlice } from "@reduxjs/toolkit";

const name = "spotify";
const initialState = {
  user: null,
  token: null,
  playlists: null,
  playing: false,
  item: null,
};
const reducers = {
  setUser: (state, action) => {
    console.log(state), console.log(action.payload.user);
  },
  setToken: (state, action) => {
    state.token = action.payload.token;
  },
  setPlaylists: (state, action) => {},
};

const spotifySlice = createSlice({
  name,
  initialState,
  reducers,
});

export const { setUser, setToken, setPlaylists } = spotifySlice.actions;

const spotifyReducer = spotifySlice.reducer;
export default spotifyReducer;
