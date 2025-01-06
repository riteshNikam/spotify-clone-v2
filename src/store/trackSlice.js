import { createSlice } from "@reduxjs/toolkit";

const name = "track";
const initialState = {
  trackData: {},
};
const reducers = {
  setTrackData: (state, action) => {
    state.trackData = action.payload.data;
  },
};

const trackSlice = createSlice({
  name: name,
  initialState,
  reducers,
});

export const { setTrackData } = trackSlice.actions;

const trackReducer = trackSlice.reducer;
export default trackReducer;
