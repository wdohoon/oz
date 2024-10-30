import {combineReducers} from "redux";
import counterReducer from "./counter";
import todoReducer from "./todo";

// combineReducers 리듀서가 각각의 리듀서를 하나의 리듀서로 구상해줌
const rootReducer = combineReducers({
    counterReducer,
    todoReducer
})

export default rootReducer;