import React, { useContext } from "react";
import { MyContext } from "./CounterContext";

const DisplayCount = () => {
    const count = useContext(MyContext);
    return <div>Count : {count + 10}</div>;
};

export default DisplayCount;
