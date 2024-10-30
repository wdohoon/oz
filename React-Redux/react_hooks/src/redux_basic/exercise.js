import {createStore} from "redux";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const initData = {
    count: 0,
}

export const increment = () => ({
    type: INCREMENT,
})
export const decrement = () => ({
    type: DECREMENT,
})

function reducer(state = initData, action) {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                count: state + 1
            };

        case "DECREMENT":
            return {
                ...state,
                count: state - 1
            };

        default:
            return state;
    }
}

const store = createStore(reducer);

// 상태 변화(dispatch)가 있을 때마다 호출되는 구독 함수 (subscribe)
store.subscribe(() => {
    const state = store.getState();
    console.log('상태가 변경되었습니다:', store.getState());
});

store.dispatch(increment());
store.dispatch(decrement());