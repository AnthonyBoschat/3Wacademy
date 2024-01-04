import React, { useEffect, useState } from "react";
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
    const win = determineWinOrLoose(quizzScore) // True ou false, si l'utilisateur gagne ou perd des points
    const [quizzScoreInformation, setQuizzScoreInformation] = useState(null) // L'objet qui servira à stocker les informations nécessaire à l'affichage

    useEffect(() => {
        const userScore = getScore(params.userName) // Score de l'utilisateur actuel
        const trueScore = quizzScore // Score si l'utilisateur gagne ( nombre positif )
        const wrongScore = -((numberOfQuestion * 10) - quizzScore) // Score si l'utilisateur perd ( nombre négatif )
        const payloadNewScore = win ? userScore + trueScore : userScore + wrongScore  // Le nouveau score à mettre à jour dans le localStorage
        setQuizzScoreInformation({
            oldScoreToShow: userScore,
            quizzScoreToShow: win ? trueScore : wrongScore,
            newScoreToShow: payloadNewScore,
            poucentOfCorrectAnswer: (quizzScore * 100) / (numberOfQuestion * 10),
            differenceBetweenScore: userScore === 0 ? 0 : payloadNewScore < 0 ? -userScore : win ? trueScore : wrongScore
            /* La différence à afficher c'est :
            • Si l'utilisateur avait un score global de 0, on ne peut descendre en dessous, donc la différence sera de 0.
            • Si l'utilisateur avait un score global au dessu de 0, on peut descendre en dessous
            • Si le calcul du nouveau score donne un nombre inferieur à 0, la différence est égale à l'inverse du score de l'utilisateur ( puisque son score ne peut pas descendre sous 0, il perdra autant de point qu'il en a )
            • Si le calcul du nouveau score donne un nombre qui est superieur ou égale à 0, la différence est exactement égale au resultat de son quizz, le trueScore, ou le wrongScore ( en cas de victoire, ou en cas de défaite )
            */
        })
        dispatch(updateScore({userName:params.userName, newScore:payloadNewScore}))
    }, [])
    
    return(
        <div className="quizzScoreOverlay">
            <div className="quizzScoreDisplay">
                <div className="quizzScoreBox">
                    <div className="scoreOfQuizz">
                        Résultat : <span style={win ? {color:"rgb(27, 111, 144)"} : {color:"rgb(136, 15, 15)"}}>{quizzScoreInformation?.poucentOfCorrectAnswer.toFixed()} %</span>
                    </div>
                    <div className="personalScore">
                        Score personnel : 
                        <s className="oldScore">{quizzScoreInformation?.oldScoreToShow}</s> 
                        <i className="fa-solid fa-arrow-right-long arrowQuizz"></i> 
                        <span className="newScore">{getScore(params.userName)}</span>
                        {win ? `( +${quizzScoreInformation?.quizzScoreToShow} )` : `( ${quizzScoreInformation?.differenceBetweenScore} )`}
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