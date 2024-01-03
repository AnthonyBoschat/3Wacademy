import React, { } from "react";
import { useSelector } from "react-redux";
import useQuizz from "../../CustomHook/useQuizz";

function QuizzQuestions(){

    const pokemonsOfQuizz = useSelector(store => store.quizz.pokemonsOfQuizz)
    const indexOfQuizz = useSelector(store => store.quizz.indexOfQuizz)
    
    
    const {changeIndex} = useQuizz()

    return(
        <div className="quizzQuestionsBox">
            <img onClick={changeIndex} src={pokemonsOfQuizz[indexOfQuizz].image} alt={pokemonsOfQuizz[indexOfQuizz].name} title={pokemonsOfQuizz[indexOfQuizz].name} />
        </div>
    )
}

export default QuizzQuestions;