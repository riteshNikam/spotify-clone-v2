import { createSlice } from "@reduxjs/toolkit";

const name = "spotify";
const initialState = {
  user: null,
  token: null,
  playlists: [],
  playing: false,
  playlistId: "",
};
const reducers = {
  setUser: (state, action) => {
    state.user = action.payload.user;
  },
  setToken: (state, action) => {
    state.token = action.payload.token;
  },
  setPlaylists: (state, action) => {
    state.playlists = [...state.playlists, ...action.payload.playlists];
    state.playlistId = action.payload.defaultId;
  },
  setPlaylistId: (state, action) => {
    state.playlistId = action.payload.id;
  },
};

const spotifySlice = createSlice({
  name,
  initialState,
  reducers,
});

export const {
  setUser,
  setToken,
  setPlaylists,
  setPlaylistId,
  setPlayListItem,
} = spotifySlice.actions;

const spotifyReducer = spotifySlice.reducer;
export default spotifyReducer;
