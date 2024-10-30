import { configureStore } from "@reduxjs/toolkit";
import rtcounterReducer from "./counterSlice";

export const store = configureStore({
    reducer: {
        counter: rtcounterReducer, //reducer 등록
    },
});

export default store;
