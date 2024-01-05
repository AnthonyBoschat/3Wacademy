import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import useQuizz from "../../CustomHook/useQuizz";
import useAnimation from "../../CustomHook/useAnimation";
import happyPikachu from "../../Images/happyPikachu.gif"

function QuizzScore(){

    const params = useParams()
    const {quizzScoreInformation, calculQuizzInformations, setQuizzScoreInformation, injectIncrementScoreAnimation} = useQuizz()
    const {injectStyleForRefInTimeOut} = useAnimation()
    const pourcentCorrectAnswerRef = useRef()
    const quizzScoreRef = useRef()
    const starScoreRef = useRef()
    const logoScoreRef = useRef()
    const scoreToIncrementRef = useRef()
    

    useEffect(() => {
        calculQuizzInformations(params.userName)
    }, [])

    useEffect(() => {
        injectStyleForRefInTimeOut([
            {ref:pourcentCorrectAnswerRef.current.style, style:{opacity:"1"}, delay:500},
            {ref:quizzScoreRef.current.style, style:{opacity:"1"}, delay:1500},
            {ref:starScoreRef.current.style, style:{opacity:"1"}, delay:2500},
            {ref:logoScoreRef.current.style, style:{opacity:"1"}, delay:3500},
        ])
        const timeOutID = injectIncrementScoreAnimation(scoreToIncrementRef.current.classList)

        return(() => {
            clearTimeout(timeOutID)
        })
    }, [quizzScoreInformation])
    
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
                        <span ref={scoreToIncrementRef} style={quizzScoreInformation?.styleColor}>{quizzScoreInformation?.oldScoreToShow}</span>
                    </div>
                </div>
                <div className="quizzLogoBox">
                    <div ref={logoScoreRef} className="logoEnglobe">
                        {quizzScoreInformation?.logoToShow}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizzScore;