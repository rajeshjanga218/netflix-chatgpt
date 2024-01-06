import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
    name:"GPTSearch",
    initialState:{
        GPTSearch:false,
    },
    reducers:{
        isGPTSearch : (state)=>{
            state.GPTSearch = !state.GPTSearch
        }
    }
})

export const {isGPTSearch} = GPTSlice.actions

export default GPTSlice.reducer