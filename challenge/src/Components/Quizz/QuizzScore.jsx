import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useUsers from "../../CustomHook/useUsers";
import { updateScore } from "../../Redux/Slices/UsersSlices";

function QuizzScore(){

    const params = useParams()
    const quizzScore = useSelector(store => store.quizz.quizzScore) // Score effectuer pendant le quizz
    const dispatch = useDispatch()
    const {getScore} = useUsers()

    const userScore = getScore(params.userName) // Score enregistrer de l'utilisateur
    const oldScore = userScore - quizzScore // Ancien score = Après sauvegarde : score de l'utilisateur - score du quizz
    const newScore = oldScore + quizzScore // Nouveau score = Après sauevgarde : ancien score + score du quizz

    useEffect(() => {
        dispatch(updateScore({userName:params.userName, newScore:userScore + quizzScore}))
    }, [])
    
    return(
        <div className="quizzScoreOverlay">
            <div className="quizzScoreDisplay">
                <div className="quizzScoreBox">
                    <div className="scoreOfQuizz">
                        Résultat : {quizzScore}
                    </div>
                    <div className="personalScore">
                        Score personnel : 
                        <s className="oldScore">{oldScore}</s> 
                        <i className="fa-solid fa-arrow-right-long arrowQuizz"></i> 
                        <span className="newScore">{newScore}</span>
                        (+ {quizzScore})
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