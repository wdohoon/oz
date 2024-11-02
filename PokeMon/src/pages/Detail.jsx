import React from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectPokemonById} from "../RTK/selector.js";
import FavoriteButton from "../component/FavoriteButton.jsx";
import FlipCard from "../component/FlipCard.jsx";
import {useTranslation} from "react-i18next";

function Detail() {
    const { t } = useTranslation();
    const {pokemonId} = useParams()
    const pokemon = useSelector(selectPokemonById(Number(pokemonId)))
    return (
        <div className='flex flex-col justify-center items-center border border-gray-500 p-32 rounded-2xl'>
            <div className='text-3xl mb-10'>
                {t(pokemon.name)}
                <FavoriteButton pokemonId={Number(pokemonId)} />
            </div>
            <div className='whitespace-pre-wrap text-center'>{t(pokemon.description)}</div>
            <FlipCard front={pokemon.front} back={pokemon.back} />
        </div>
    );
}

export default Detail;