import React, {useEffect, useMemo, useState} from 'react'
import './App.css'
import Timer from "./Components/Timer.jsx";

function App() {
    // const handleSwitch = () => {
    //     setIsOn(!isOn);
    // }
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
        </>
    )
}

export default App
