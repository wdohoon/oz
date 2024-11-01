import React, {useEffect, useMemo, useState} from 'react'
import './App.css'
import TenTimes from "./Components/TenTimes.jsx";

function App() {
    const [count, setCount] = useState(0);
    const [isOn, setIsOn] = useState(false);
    const handleCount = () => {
        setCount(count + 1);
    }
    const obj = useMemo(() => {
        return {name: isOn ? 'on' : 'off',}
    }, [isOn]);

    useEffect(() => {
        console.log('useEffect 실행됨');
    }, [obj])

    return (

        <>
            <button onClick={() => (setIsOn(!isOn))}>{obj.name}</button>
            <button onClick={handleCount}>{count}</button>
            <TenTimes />
        </>
    )
}

export default App
