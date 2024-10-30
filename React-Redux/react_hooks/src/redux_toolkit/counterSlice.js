// 초기값 설정
import {createSlice} from "@reduxjs/toolkit";

const initData = {
    value: 0,
}

// slice 생성(액션 + 액션 생성함수 + 리덕스)
const counterSlice = createSlice({
    name: "counter",
    initialState: initData,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
    },
});

// 액션과 리듀서 export
export const {increment,decrement} = counterSlice.actions;
export default counterSlice.reducer;