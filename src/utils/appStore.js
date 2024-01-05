import userReducer from "./userSlice";
import moviesSlice from "./moviesSlice";

import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({
reducer:{
    user:userReducer,
    movies:moviesSlice
}
})

export default appStore