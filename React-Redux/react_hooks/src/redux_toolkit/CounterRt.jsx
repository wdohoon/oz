import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlice";

const CounterRT = () => {
    const count = useSelector((state) => state.rtcounter.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(increment())}>+1</button>
            <button onClick={() => dispatch(decrement())}>-1</button>
        </div>
    );
};

export default CounterRT;
