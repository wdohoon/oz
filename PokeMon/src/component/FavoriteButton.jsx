import {useDispatch, useSelector} from "react-redux";
import {favoriteSlice} from "../RTK/slice.js";

export default function FavoriteButton({pokemonId}) {
    const isFavorite = useSelector(state => state.favorite.some((item => item === pokemonId)));
    const dispatch = useDispatch();

    return (
        <button
            onClick={(e) => {
                e.stopPropagation();
                dispatch(isFavorite ?
                    favoriteSlice.actions.removeFromFavorite({pokemonId}) :
                    favoriteSlice.actions.addToFavorite({pokemonId}));
            }}
        >
            {isFavorite ? '❤️' : '♡'}
        </button>
    )
}