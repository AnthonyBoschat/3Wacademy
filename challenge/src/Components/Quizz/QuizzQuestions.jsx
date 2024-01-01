import React, { } from "react";
import { useSelector } from "react-redux";
import useQuizz from "../../CustomHook/useQuizz";

function QuizzQuestions(){

    const pokemonsOfQuizz = useSelector(store => store.pokemons.pokemonsOfQuizz)
    const indexOfQuizz = useSelector(store => store.pokemons.indexOfQuizz)
    const {changeIndex} = useQuizz()

    console.log(pokemonsOfQuizz)

    return(
        <div className="quizzQuestionsBox">
            <img onClick={changeIndex} src={pokemonsOfQuizz[indexOfQuizz].image} alt={pokemonsOfQuizz[indexOfQuizz].name} title={pokemonsOfQuizz[indexOfQuizz].name} />
        </div>
    )
}

export default QuizzQuestions;