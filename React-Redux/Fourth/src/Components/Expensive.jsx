import React, {useMemo} from 'react';

function Expensive() {
    const [ count, setCount ] = React.useState(0);
    const expensiveCalculation = useMemo(() => {
        console.log('Expensive calculation');
        let result = 0;
        for (let i = 0; i < 1000000000; i++) {
            result += 1;
        }
        return result;
    }, [])
    return (
        <div>
            <h1>값 : {expensiveCalculation}</h1>
            <button onClick={() => setCount(count +1)}>카운트 : {count}</button>
        </div>
    );
}

export default Expensive;