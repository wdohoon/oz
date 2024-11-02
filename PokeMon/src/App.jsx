import './App.scss';
import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMultiplePokemonById } from "./RTK/thunk.js";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import LanguageSelector from "./component/LanguageSelector.jsx";
import { useTranslation } from 'react-i18next'; // useTranslation 훅 가져오기

const Main = lazy(() => import("./pages/Main"));
const Detail = lazy(() => import("./pages/Detail"));
const Search = lazy(() => import("./pages/Search"));
const Favorite = lazy(() => import("./pages/Favorite"));

function App() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentLanguage = useSelector((state) => state.language.current); // 언어 상태 가져오기
    const { t } = useTranslation(); // 번역 함수 가져오기

    useEffect(() => {
        dispatch(fetchMultiplePokemonById(887));
    }, [dispatch, currentLanguage]); // 언어가 변경될 때 데이터를 다시 요청

    return (
        <>
            <h1 className='border-t-[30px] border-t-[red] bg-black text-white text-4xl text-center'>
                {t('pokedex')}
            </h1>
            <nav className='flex gap-10 justify-center py-6 border-b border-gray-700 bg-secondary-bg/70 shadow-lg shadow-black rounded-lg mx-10 my-5'>
                <Link className='hover:text-highlight transition duration-300' to={'/'}>{t('main')}</Link>
                <Link className='hover:text-highlight transition duration-300' to={'/favorite'}>{t('myPokemon')}</Link>
                <div className='flex items-center gap-2'>
                    <span>🔍</span>
                    <input
                        onChange={(e) => navigate(`/search?pokemon=${e.target.value}`)}
                        type="text"
                        className='border-b border-gray-500 px-2 text-black rounded-md focus:outline-none focus:ring focus:ring-highlight'
                    />
                </div>
                <LanguageSelector />
            </nav>

            <main className='flex justify-center flex-wrap gap-10 pt-20'>
                <Suspense fallback={<div>{t('loading')}</div>}>
                    <Routes>
                        <Route path={'/'} element={<Main />} />
                        <Route path={'/detail/:pokemonId'} element={<Detail />} />
                        <Route path={'/search'} element={<Search />} />
                        <Route path={'/favorite'} element={<Favorite />} />
                    </Routes>
                </Suspense>
            </main>
        </>
    );
}

export default App;
