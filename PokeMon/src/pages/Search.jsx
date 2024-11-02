import React from 'react';
import {useSearchParams} from "react-router-dom";
import {getRegExp} from "korean-regexp";
import {useSelector} from "react-redux";
import {selectPokemonByRegExp} from "../RTK/selector.js";
import {Card} from "../component/Card.jsx";

export default function Search() {
    const [searchParams] = useSearchParams()
    const param = searchParams.get('pokemon')
    const reg = getRegExp(param)
    const pokemon = useSelector(selectPokemonByRegExp(reg));
    console.log(pokemon)
    return (
        <div>
            {pokemon.map((el) => (
                <Card pokemon={el} key={el.id} />
            ))}
        </div>
    );
}