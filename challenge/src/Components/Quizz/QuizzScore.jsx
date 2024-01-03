import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useUsers from "../../CustomHook/useUsers";
import { updateScore } from "../../Redux/Slices/UsersSlices";
import useQuizz from "../../CustomHook/useQuizz";

function QuizzScore(){

    const params = useParams()
    const quizzScore = useSelector(store => store.quizz.quizzScore) // Score effectuer pendant le quizz
    const numberOfQuestion = useSelector(store => store.parameters.numberOfQuestion)
    const dispatch = useDispatch()
    const {getScore} = useUsers()
    const {determineWinOrLoose} = useQuizz()


    const result = determineWinOrLoose(quizzScore)
    const wrongScore = -((numberOfQuestion * 10) - quizzScore)
    const userScore = getScore(params.userName) 
    const oldScore = result ? userScore - quizzScore : userScore - wrongScore 
    const newScore = result ? oldScore + quizzScore : oldScore + wrongScore 

    useEffect(() => {
        
        const payloadNewScore = result ? userScore + quizzScore : userScore + wrongScore
        dispatch(updateScore({userName:params.userName, newScore:payloadNewScore}))
    }, [])
    
    return(
        <div className="quizzScoreOverlay">
            <div className="quizzScoreDisplay">
                <div className="quizzScoreBox">
                    <div className="scoreOfQuizz">
                        Résultat : {result ? quizzScore : wrongScore}
                    </div>
                    <div className="personalScore">
                        Score personnel : 
                        <s className="oldScore">{oldScore}</s> 
                        <i className="fa-solid fa-arrow-right-long arrowQuizz"></i> 
                        <span className="newScore">{newScore}</span>
                        {result ? `( +${quizzScore} )` : `( ${wrongScore} )`}
                    </div>
                </div>
                <div className="quizzLogoBox">
                    <div className="logoEnglobe">
                        <i className="fa-solid fa-angles-up"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizzScore;