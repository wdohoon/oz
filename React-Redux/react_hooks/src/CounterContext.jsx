import {createContext, useState} from "react";
import DisplayCount from "./DisplayCount";

//1. createContext()를 사용하여 새로운 Context 객체를 생성
export const MyContext = createContext(undefined);

const CounterContext = () => {
    //2. 상태를 생성하고 초기값 설정합니다
    const [count] = useState(1);

    //3. Provider 를 사용하여 Context 에 데이터를 제공하여 하위 컴포넌트에서 상태값에 접근하여 사용가능하게 할 수 있습니다.
    return (
        <div>
            <MyContext.Provider value={count}>
                <DisplayCount/>
            </MyContext.Provider>
        </div>
    );
};

export default CounterContext;
