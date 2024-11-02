import styled from "styled-components";
import React from "react";
import {useNavigate} from "react-router-dom";
import FavoriteButton from "./FavoriteButton.jsx";

const CardContainer = styled.section`
    width: 150px;
    border: 1px solid gray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding-bottom: 10px;
    border-radius: 10px;

    img {
        width: 120px;
    }
`

export const Card = ({pokemon}) => {
    const navigate = useNavigate()
    return (
        <CardContainer onClick={() => navigate(`/detail/${pokemon.id}`)}>
            <img src={pokemon.front} alt={pokemon.front}/>
            <div>
                {pokemon.name}
                <FavoriteButton pokemonId={pokemon.id}/>
            </div>
        </CardContainer>
    )
}