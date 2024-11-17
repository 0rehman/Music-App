import { RootState } from "@/store/store";
import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "uiSlice",
  initialState: {
    showSearchBar: false,
  },
  reducers: {
    setShowSearchBar: (state) => {
      if (!state.showSearchBar) {
        state.showSearchBar = true;
      } else {
        state.showSearchBar = false;
      }
    },
  },
});

export const selectSearchBarShow = (state: RootState) =>
  state.uiSliceReducer.showSearchBar;

export const { setShowSearchBar } = uiSlice.actions;

export default uiSlice;
