import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: "false",
  msg: "",
  errr: "",
};

export const signUpUser = createAsyncThunk("signuperuser", async (body) => {
  const res = await fetch("", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
});

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [signUpUser.pending]: (state, action) => {
      state.isLoading = true;
    },
    [signUpUser.fulfilled]: (state, { payload: { error, msg } }) => {
      state.isLoading = false;
      if (error) {
        state.error = error;
      } else {
        state.msg = msg;
      }
    },
    [signUpUser.rejected]: (state, action) => {
      state.isLoading = true;
    },
  },
});

export default authSlice.reducer;
