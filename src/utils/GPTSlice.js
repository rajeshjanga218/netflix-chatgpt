import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
    name:"GPTSearch",
    initialState:{
        GPTSearch:false,
        GPTSearchMovies:null
    },
    reducers:{
        isGPTSearch : (state)=>{
            state.GPTSearch = !state.GPTSearch
        },
        addGPTSearchMovies: (state,action)=>{
            state.GPTSearchMovies = action.payload
        }
    }
})

export const {isGPTSearch, addGPTSearchMovies} = GPTSlice.actions

export default GPTSlice.reducer