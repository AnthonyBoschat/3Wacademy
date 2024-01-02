import React from "react";
import { useSelector } from "react-redux";

function QuizzScore(){

    const quizzScore = useSelector(store => store.quizz.quizzScore)
    const numberOfQuestion = useSelector(store => store.parameters.numberOfQuestion)

    return(
        <>
            <h1>Score : {quizzScore} / {numberOfQuestion * 10}</h1>
        </>
    )
}

export default QuizzScore;