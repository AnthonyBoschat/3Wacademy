import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useUsers from "../../CustomHook/useUsers";
import { updateScore } from "../../Redux/Slices/UsersSlices";
import useQuizz from "../../CustomHook/useQuizz";

function QuizzScore(){

    const params = useParams()
    const {getScore} = useUsers()
    const {quizzScoreInformation, calculQuizzInformations} = useQuizz()
    const pourcentCorrectAnswerRef = useRef()
    const quizzScoreRef = useRef()
    const starScoreRef = useRef()
        
    useEffect(() => {
        calculQuizzInformations(params.userName)
        setTimeout(() => {
            pourcentCorrectAnswerRef.current.style.opacity = "1"
            setTimeout(() => {
                quizzScoreRef.current.style.opacity = "1"
                setTimeout(() => {
                    starScoreRef.current.style.opacity = "1"
                }, 1000);
            }, 1000);
        }, 1000);
    }, [])
    
    return(
        <div className="quizzScoreOverlay">
            <div className="quizzScoreDisplay">
                <div className="quizzScoreBox">
                    <div ref={pourcentCorrectAnswerRef} className="pourcentCorrectAnswer">
                        Taux de réussite : <span style={quizzScoreInformation?.styleColor}>{quizzScoreInformation?.poucentOfCorrectAnswer} %</span>
                    </div>
                    <div ref={quizzScoreRef} className="quizzScore">
                        Score : <span style={quizzScoreInformation?.styleColor}>{quizzScoreInformation?.quizzScoreToShow}</span>
                    </div>
                    <div ref={starScoreRef} className="starScore">
                        <i className="fa-solid fa-star"></i>
                        <span style={quizzScoreInformation?.styleColor}>{quizzScoreInformation?.newScoreToShow}</span>
                    </div>
                </div>
                <div className="quizzLogoBox">
                    <div style={quizzScoreInformation?.boxShadowStyle} className="logoEnglobe">
                        {quizzScoreInformation?.logoToShow}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizzScore;