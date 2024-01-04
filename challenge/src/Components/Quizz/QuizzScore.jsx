import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import useQuizz from "../../CustomHook/useQuizz";
import useAnimation from "../../CustomHook/useAnimation";

function QuizzScore(){

    const params = useParams()
    const {quizzScoreInformation, calculQuizzInformations} = useQuizz()
    const {injectStyleForRefInTimeOut} = useAnimation()
    const pourcentCorrectAnswerRef = useRef()
    const quizzScoreRef = useRef()
    const starScoreRef = useRef()
        
    useEffect(() => {
        calculQuizzInformations(params.userName)
        injectStyleForRefInTimeOut([
            {ref:pourcentCorrectAnswerRef.current.style, style:{opacity:"1"}, delay:500},
            {ref:quizzScoreRef.current.style, style:{opacity:"1"}, delay:1500},
            {ref:starScoreRef.current.style, style:{opacity:"1"}, delay:2500}
        ])
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