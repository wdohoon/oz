import {configureStore} from "@reduxjs/toolkit";
import {pokemonSlice} from "./slice.js";

export const store = configureStore({
    reducer: {
        pokemon: pokemonSlice.reducer
    }
})