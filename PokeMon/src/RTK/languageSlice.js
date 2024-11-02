// languageSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
    name: 'language',
    initialState: {
        current: localStorage.getItem('language') || 'ko', // 초기값 설정
    },
    reducers: {
        setLanguage: (state, action) => {
            state.current = action.payload;
        },
    },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
