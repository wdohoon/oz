import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from "./Components/Child.jsx";
import Parent from "./Components/Parent.jsx";

function App() {
    const [data, setData] = useState({
        name
    })

    return (
        <>
            <Parent />
        </>
    )
}

export default App
