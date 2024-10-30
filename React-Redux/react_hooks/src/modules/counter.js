// 액션
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 액션 생성 함수
export const increase = () => ({type: INCREASE});
export const decrease = () => ({type: DECREASE});

// 초기값
const initData = {
    count: 0,
    // value: 1,
    // age: 27,
}

// 리듀서 생성
export default function counterReducer(state = initData, action) {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1,
            }
        case "DECREMENT":
            return {
                count: state.count - 1,
            }
        default:
            return state;
    }
}