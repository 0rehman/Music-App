import { RootState } from "@/store/store";
import { createSlice } from "@reduxjs/toolkit";

const songPlayerSlice = createSlice({
  name: "songPlayerSlice",
  initialState: {
    showSongPlayer: false,
    playSong: {
      songPlaying: false,
      songId: "",
    },
    songToPlay: "",
    isSonglooped: false,
    songMeta: {
      songImage: "",
      songName: "",
      songArtistName: "",
    },
    songList: [],
  },
  reducers: {
    setShowSongPlayer: (state) => {
      state.showSongPlayer = true;
    },
    setSongPlaying: (state, action) => {
      state.playSong = {
        ...state.playSong,
        songPlaying: !state.playSong.songPlaying,
        songId: action.payload,
      };
    },
    setSongToPlay: (state, action) => {
      state.songToPlay = action.payload;
    },
    setSongLooped: (state) => {
      if (!state.isSonglooped) {
        state.isSonglooped = true;
      } else {
        state.isSonglooped = false;
      }
    },
    setSongMeta: (state, action) => {
      const { image, name, artistName } = action.payload;
      state.songMeta = {
        ...state.songMeta,
        songImage: image,
        songName: name,
        songArtistName: artistName,
      };
    },
    setSongList: (state, action) => {
      const mappedData = action.payload?.map((item: any) => {
        const { tracks } = item;
        return tracks.items;
      });

      const storedSongSrc = mappedData
        ?.flat()
        .filter((item: any) => {
          if (item?.preview_url) {
            return item;
          }
        })
        .map((item: any) => item.preview_url);

      state.songList = storedSongSrc;
    },
  },
});

export const selectShowSongPlayer = (state: RootState) =>
  state.songPlayerSliceReducer.showSongPlayer;
export const selectSongPlaying = (state: RootState) =>
  state.songPlayerSliceReducer.playSong;
export const selectSongToPlay = (state: RootState) =>
  state.songPlayerSliceReducer.songToPlay;
export const selectIsSongLooped = (state: RootState) =>
  state.songPlayerSliceReducer.isSonglooped;
export const selectSongMeta = (state: RootState) =>
  state.songPlayerSliceReducer.songMeta;
export const selectSongList = (state: RootState) =>
  state.songPlayerSliceReducer.songList;

export const {
  setShowSongPlayer,
  setSongPlaying,
  setSongToPlay,
  setSongLooped,
  setSongMeta,
  setSongList,
} = songPlayerSlice.actions;

export default songPlayerSlice;
