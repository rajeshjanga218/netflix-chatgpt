import { configureStore } from '@reduxjs/toolkit'
import GPTSlice from './GPTSlice'
import userReducer from './userSlice'
import moviesSlice from './moviesSlice'

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesSlice,
    GPTSearch: GPTSlice,
  },
})

export default appStore
