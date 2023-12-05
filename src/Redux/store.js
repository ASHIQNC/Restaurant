import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    //key and value same aayit koduthu
    authSlice,
  },
});

export default store;
