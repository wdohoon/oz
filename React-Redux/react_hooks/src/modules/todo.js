//액션 타입 선언
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

//액션 생성함수
let nextID = 1;
export const addTodo = (text) => ({
    type: ADD_TODO,
    todo: {
        id: nextID++,
        text,
    },
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    data: id,
});

//초기값
const initState = [];

export default function todoReducer(state = initState, action) {
    switch (action.type) {
        case ADD_TODO:
            return state.concat(action.todo);
        case TOGGLE_TODO:
            return state.map((todo) =>
                todo.id === action.id ? { ...todo, done: !todo.done } : todo
            );
        default:
            return state;
    }
}
