import React, { useEffect } from "react";
import useQuizz from "../../CustomHook/useQuizz";
import { useSelector } from "react-redux";

function QuizzResponses(){

    const pokemonsOfQuizz = useSelector(store => store.pokemons.pokemonsOfQuizz)
    const indexOfQuizz = useSelector(store => store.pokemons.indexOfQuizz)
    const responseOfQuizz = useSelector(store => store.pokemons.responseOfQuizz)
    const {getPokemonsNamesAnswer} = useQuizz()

    useEffect(() => {
        getPokemonsNamesAnswer(pokemonsOfQuizz[indexOfQuizz])
    }, [])

    const generateButton = (pokemonName) => (
        <button key={pokemonName}>
            <span>
                {pokemonName}
            </span>
        </button>
    )
    
    return(
        <div className="quizzResponsesBox">
            <div className="quizzButtonsBox">
                {responseOfQuizz.map(pokemonName => generateButton(pokemonName))}
            </div>
        </div>
    )
}

export default QuizzResponses;