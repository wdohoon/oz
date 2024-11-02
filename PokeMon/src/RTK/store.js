import {configureStore} from "@reduxjs/toolkit";
import {favoriteSlice, pokemonSlice} from "./slice.js";

export const store = configureStore({
    reducer: {
        pokemon: pokemonSlice.reducer,
        favorite: favoriteSlice.reducer,
    }
})