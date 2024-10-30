import React, { useState, useCallback } from "react";

// 자식 컴포넌트
const CounterButton = React.memo(({ onClick, count }) => {
    console.log("CounterButton 렌더링...");
    return <button onClick={onClick}>Clicked {count} times</button>;
});

const CounterButton2 = ({ onClick, count }) => {
    console.log("CounterButton 렌더링...");
    return <button onClick={onClick}>Clicked {count} times</button>;
};

// 부모 컴포넌트
const CounterUserCallback = () => {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

    const handleClick = useCallback(() => {
        console.log("handleClick 호출");

        setCount((prevCount) => prevCount + 1);
    }, []); // 의존성 배열이 빈 배열이므로 처음 렌더링 시에만 생성됨

    // 다른 상태 변경 함수
    const handleOtherStateChange = () => {
        console.log("handleOtherStateChange 호출");
        setNumber((prev) => prev + 1);
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <CounterButton onClick={handleClick} count={count} />
            <button onClick={handleOtherStateChange}>숫자 상태값: {number}</button>
        </div>
    );
};

export default CounterUserCallback;
