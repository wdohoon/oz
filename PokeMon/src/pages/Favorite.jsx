import {useSelector} from "react-redux";
import {selectFavoritePokemons} from "../RTK/selector.js";
import {Card} from "../component/Card.jsx";
import React from "react";

export default function Favorite() {
    const pokemon = useSelector(selectFavoritePokemons);
    return (
        <div>
            {pokemon.map((el) => (
                <Card pokemon={el} key={el.id} />
            ))}
        </div>
    );
}

