import { RootState } from "@/store/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AlbumData {
  name: string | undefined;
  description?: string;
  likes?: number;
  tracks?: number;
  duration?: string;
}

interface AlbumState {
  albumData: AlbumData | null;
}

const initialState: AlbumState = {
  albumData: null,
};

const albumSlice = createSlice({
  name: "albumSlice",
  initialState,
  reducers: {
    setAlbumData: (state, action: PayloadAction<AlbumData>) => {
      state.albumData = action.payload;
      console.log('payload', action.payload);
    },
  },
});

export const selectAlbumData = (state: RootState): AlbumData | null =>
  state.albumSliceReducer?.albumData;

export const { setAlbumData } = albumSlice.actions;

export default albumSlice;
