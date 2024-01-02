import React, { useEffect, useState } from "react";
import useQuizz from "../../CustomHook/useQuizz";
import { useDispatch, useSelector } from "react-redux";
import { updateQuizzResponse } from "../../Redux/Slices/QuizzSlices";

function QuizzResponses(){

    const pokemonsOfQuizz = useSelector(store => store.quizz.pokemonsOfQuizz)
    const indexOfQuizz = useSelector(store => store.quizz.indexOfQuizz)
    const responseOfQuizz = useSelector(store => store.quizz.responseOfQuizz)
    const quizzResponse = useSelector(store => store.quizz.quizzResponse)
    const dispatch = useDispatch()
    const {getPokemonsNamesAnswer, handleClickResponse} = useQuizz()

    useEffect(() => {
        dispatch(updateQuizzResponse(false))
        getPokemonsNamesAnswer(pokemonsOfQuizz[indexOfQuizz]) // Génère la liste des réponses possible
    }, [indexOfQuizz])


    const getStyle = (pokemonName) => {
        if(quizzResponse){
            return (pokemonName === pokemonsOfQuizz[indexOfQuizz].name ? {background:"rgba(30, 202, 84, 0.678)"} : {background:"rgba(187, 38, 43, 0.678)"})
        }
    }

    const generateButton = (pokemonName) => (
        <button 
        data-pokename={pokemonName}
        style={getStyle(pokemonName)}
        onClick={(e) => handleClickResponse(e)} key={pokemonName}>
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