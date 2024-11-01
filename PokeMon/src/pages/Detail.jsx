import React from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectPokemonById} from "../RTK/selector.js";

function Detail() {
    const {pokemonId} = useParams()
    const pokemon = useSelector(selectPokemonById(Number(pokemonId)))
    return (
        <div className='flex flex-col justify-center items-center border border-gray-500 p-32 rounded-2xl'>
            <div className='text-3xl mb-10'>{pokemon.name}</div>
            <div className='whitespace-pre-wrap text-center'>{pokemon.description}</div>
            <img className='w-48' src={pokemon.front} alt={pokemon.front}/>
        </div>
    );
}

export default Detail;