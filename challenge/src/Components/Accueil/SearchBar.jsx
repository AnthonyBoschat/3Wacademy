import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePokemonsToShow } from "../../Redux/Slices/PokemonsSlices";
import useSearchBar from "../../CustomHook/useSearchBar";

function SearchBar(){

    const pokemonsList = useSelector(state => state.pokemons.pokemonsList)
    const {filterPokemonsToShow} = useSearchBar()


    return(
        <>
            <input onChange={(e) => filterPokemonsToShow(e)} disabled={!pokemonsList} placeholder='exemple: "Pikachu"'  type="text" />
        </>
    )
}

export default SearchBar;