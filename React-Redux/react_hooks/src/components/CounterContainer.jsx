import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../modules/counter";
import Counter from "./Counter";
import counterReducer from "./../modules/counter";

/**
 *  VAC 디자인 패턴(UI와 비즈니스 로직을 분리하는 패턴입니다)
 *  컨테이너 컴포넌트
 *   - 리덕스 상태를 조회하거나 액션을 디스패치 하는 컴포넌트입니다.
 *   - UI와 관련없는 비즈니스 로직을 처리하거나, 다른 프리젠테이션 컴포넌트들 불러와서 사용하는 역할을 합니다
 */
//
const CounterContainer = () => {
    //useSelector 는 리덕스 스토어의 상태를 조회하는 Hook 입니다.
    const { number } = useSelector((state) => ({
        number: state.counterReducer.count,
    }));

    console.log(number)

    //useDispatch 는 리덕스 스토어의 dispatch 함수를 사용 할 수 있게 해주는 hook 입니다.
    const dispatch = useDispatch(); // 리덕스에서 제공하는 내장함수
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());

    return (
        <Counter number={number} onDecrease={onDecrease} onIncrease={onIncrease} />
    );
};

export default CounterContainer;
