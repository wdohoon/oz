import './App.scss'
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchMultiplePokemonById} from "./RTK/thunk.js";

function App() {
  const dispatch = useDispatch()
  const pokemonData = useSelector(state => state.pokemon)
  console.log(pokemonData)

  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151))
  }, []);

  return (
    <>
      <h1 className='text-4xl text-center'>포켓몬 도감</h1>
    </>
  )
}

export default App
