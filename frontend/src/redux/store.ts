import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./reducer/UserReducer";

const store = configureStore({
  reducer: {
    user: UserReducer,
  },
});

export default store;
