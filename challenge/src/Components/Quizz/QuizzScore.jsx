import React from "react";
import { useSelector } from "react-redux";

function QuizzScore(){

    const quizzScore = useSelector(store => store.quizz.quizzScore)
    const numberOfQuestion = useSelector(store => store.parameters.numberOfQuestion)

    return(
        <div className="quizzScoreOverlay">
            <div className="quizzScoreDisplay">
                <div className="quizzScoreBox">
                    <div className="scoreOfQuizz">
                        Résultat : {quizzScore}
                    </div>
                    <div className="personalScore">
                        Score personnel : 0 ( + {quizzScore} )
                    </div>
                </div>
                <div className="quizzLogoBox">
                    <div className="logoEnglobe">
                        <i class="fa-solid fa-angles-up"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizzScore;