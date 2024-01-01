import React, { useEffect, useState } from "react";
import QuizzQuestions from "./QuizzQuestions";
import QuizzResponses from "./QuizzResponses";
import useQuizz from "../../CustomHook/useQuizz";

function Quizz(){

    const [quizzStart, setQuizzStart] = useState(false)
    const {getRandomPokemons} = useQuizz()

    const handleClick = () => {
        setQuizzStart(true)
    }

    useEffect(() => {
        getRandomPokemons()
    }, [])

    return(
        <>
            <div className="quizzDisplay">
                {!quizzStart && (
                    <div className="quizzOff">
                        <span onClick={handleClick} className="startButton">Commencer le quizz</span>
                    </div>
                )}
                {quizzStart && (
                    <div className="quizzOn">
                        <QuizzQuestions/>
                        <QuizzResponses/>
                    </div>
                )}
            </div>
        </>
    )
}

export default Quizz;