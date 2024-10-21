import React, {useRef, useState} from 'react';

function Count() {
    const [count, setCount] = useState(0);
    let varCount = 0;
    const refCount = useRef(0);

    const handleStateCount = () => {
        setCount(count + 1);
    }
    const handleVarCount = () => {
        varCount++;
    }
    const handleRefCount = () => {
        refCount.current++;
    }

    return (
        <div>
            <button onClick={handleStateCount}>state : {count}</button>
            <button onClick={handleVarCount}>var : {varCount}</button>
            <button onClick={handleRefCount}>ref : {refCount.current}</button>
        </div>
    );
}

export default Count;