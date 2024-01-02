import React, { useEffect } from "react";
import QuizzQuestions from "./QuizzQuestions";
import QuizzResponses from "./QuizzResponses";
import useQuizz from "../../CustomHook/useQuizz";
import QuizzScore from "./QuizzScore";

function Quizz(){

    const {quizzStart, quizzEnd, startQuizz, resetQuizzFull} = useQuizz()

    

    useEffect(() => {
        resetQuizzFull()
    }, [])

    return(
        <>
            <div className="quizzDisplay">
                {!quizzStart && (
                    <div className="quizzOff">
                        <span onClick={startQuizz} className="startButton">Commencer le quizz</span>
                    </div>
                )}
                {(quizzStart && !quizzEnd) && (
                    <div className="quizzOn">
                        <QuizzQuestions/>
                        <QuizzResponses/>
                    </div>
                )}
                {(quizzStart && quizzEnd) && (
                    <div className="quizzOn">
                        <QuizzScore/>
                    </div>
                )}
            </div>
        </>
    )
}

export default Quizz;