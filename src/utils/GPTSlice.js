import { createSlice } from '@reduxjs/toolkit'

const GPTSlice = createSlice({
  name: 'GPTSearch',
  initialState: {
    GPTSearch: false,
    GPTSearchMovies: null,
    GPTMovieNames: null,
  },
  reducers: {
    isGPTSearch: (state) => {
      state.GPTSearch = !state.GPTSearch
    },
    addGPTSearchMovies: (state, action) => {
      const { GPTMovieNames, GPTSearchMovies } = action.payload
      state.GPTSearchMovies = GPTSearchMovies
      state.GPTMovieNames = GPTMovieNames
    },
  },
})

export const { isGPTSearch, addGPTSearchMovies } = GPTSlice.actions

export default GPTSlice.reducer
