import { RootState } from "@/store/store";
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    token: "",
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      console.log('action payload:', action.payload);
    },
    resetToken(state) {
      state.token = "";
    },
  },
});

export const selectToken = (state: RootState) => state.authSliceReducer.token;

export const { setToken, resetToken } = authSlice.actions;

export default authSlice;
