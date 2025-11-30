import { createSlice } from "@reduxjs/toolkit";

const gemSlice = createSlice({
    name: "gem",
    initialState: {
        showGemSearch: false,
        movieNames: null,
        movieResults: null
    },
    reducers: {
        toogleGemSearchView: (state) => {
            state.showGemSearch = !state.showGemSearch;
        },
        addGemMovieResults: (state, action) => {
            const {movieNames, movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    }
})

export const {toogleGemSearchView, addGemMovieResults} = gemSlice.actions;

export default gemSlice.reducer;