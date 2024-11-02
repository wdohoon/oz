import styled from "styled-components";
import React, {memo, useState} from "react";
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

export const Card = memo(({pokemon}) => {
    const [isImageLoading, setIsImageLoading] = useState(true);
    const navigate = useNavigate()
    return (
        <CardContainer onClick={() => navigate(`/detail/${pokemon.id}`)}>
            {
                isImageLoading ?
                <div className='w-[120px] h-[120px] leading-[120px] text-center'>Pokemon Loading...</div>
                : null
            }
            <img
                src={pokemon.front}
                alt={pokemon.front}
                style={{display: isImageLoading ? "none" : "block"}}
                onLoad={() => setIsImageLoading(false)}
            />
            <div>
                {pokemon.name}
                <FavoriteButton pokemonId={pokemon.id}/>
            </div>
        </CardContainer>
    )
})