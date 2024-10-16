import {Route, Routes, useNavigate} from "react-router-dom";
import './App.css'
import Main from "./page/Main.jsx";
import Detail from "./page/Detail.jsx";
import Search from "./page/Search.jsx";
import {useState} from "react";

function App() {
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();

    return (
        <>
            <header>
                <h1> 동물 </h1>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button
                    onClick={() => navigate(`/search?animal=${inputValue}`)}
                >
                    검색
                </button>
            </header>

            <Routes>
                <Route path='/' element={<Main/>}></Route>
                <Route path='/detail/:id' element={<Detail/>}></Route>
                <Route path='/search' element={<Search/>}></Route>
            </Routes>

            <footer>all rights reserved to D.H</footer>
        </>
    )
}

export default App
