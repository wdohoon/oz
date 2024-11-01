import React from 'react';
import {useSelector} from "react-redux";
import {Card} from "../component/Card.jsx";

export default function Main() {
    const pokemonData = useSelector(state => state.pokemon.data)

    return (
        <>
            {pokemonData.map((el) => (
                <Card pokemon={el} key={el.id} />
            ))}
        </>
    );
}