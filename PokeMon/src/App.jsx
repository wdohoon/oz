import './App.scss'
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchMultiplePokemonById} from "./RTK/thunk.js";
import {Link, Route, Routes} from "react-router-dom";
import Main from "./pages/Main.jsx";
import Detail from "./pages/Detail.jsx";
import Search from "./pages/Search.jsx";
import Favorite from "./pages/Favorite.jsx";

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMultiplePokemonById(151));
    }, [dispatch]);


    return (
        <>
            <h1 className='text-4xl text-center'>포켓몬 도감</h1>
            <nav className='flex gap-10 justify-center'>
                <Link to={'/'}>메인</Link>
                <Link to={'/pages/favorite'}>찜목록</Link>
                <span>🔍</span>
                <input type="text" className='border-b border-gray-500 px-2'/>
            </nav>
            <main className='flex justify-center flex-wrap gap-10 pt-20'>
                <Routes>
                    <Route path={'/'} element={<Main/>}/>
                    <Route path={'/detail/:pokemonId'} element={<Detail/>}/>
                    <Route path={'/search'} element={<Search/>}/>
                    <Route path={'/favorite'} element={<Favorite/>} />
                </Routes>
            </main>
        </>
    )
}

export default App
