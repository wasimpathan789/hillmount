import { configureStore } from "@reduxjs/toolkit";
import autSlice from "./redux/autSlice";

const store = configureStore({
  reducer: {
    user: autSlice,
  },
});

export default store;
