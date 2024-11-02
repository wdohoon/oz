// thunk.js
import {createAsyncThunk} from "@reduxjs/toolkit";
import i18n from '../i18n';

export const fetchMultiplePokemonById = createAsyncThunk(
    'pokemon/fetchMultiplePokemonById',
    async (maxPokemonId) => {
        const numberArray = Array.from({length: maxPokemonId}, (_, i) => i + 1);

        const fetchAPI = async (pokemonId) => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`);
            const data = await response.json();

            let currentLanguage = i18n.language;

            if (currentLanguage === 'jp') currentLanguage = 'ja'; // 일본어 코드 수정
            if (currentLanguage === 'zh') currentLanguage = 'zh-Hans'; // 중국어 코드 수정 (간체 기준)

            const pokemonName = data.names.find(el => el.language.name === currentLanguage)?.name || data.name;
            const pokemonDescription = data.flavor_text_entries.find(el => el.language.name === currentLanguage)?.flavor_text || "Description not available";

            const pokemonData = {
                id: pokemonId,
                name: pokemonName,
                description: pokemonDescription,
                front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
                back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`,
            };

            return pokemonData;
        };


        return await Promise.all(numberArray.map((el) => fetchAPI(el)));
    }
);
