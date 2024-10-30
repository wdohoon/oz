import React from "react";

/**
 * 프레젠테이셔널 컴포넌트
 *  - 리덕스 스토어에 직접적으로 접근하지 않고 필요한 값이나 함수를 전달받아 렌더링하는 컴포넌트
 *
 */
const Counter = ({ number, onIncrease, onDecrease }) => {
    return (
        <div>
            <h1>{number}</h1>
            <div>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    );
};

export default Counter;
