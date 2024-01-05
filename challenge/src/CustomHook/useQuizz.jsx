import { useDispatch, useSelector } from "react-redux";
import { incrementQuizzScore, resetQuizz, updateQuizzEnd, updateQuizzResponse, updateQuizzStart, incrementIndex, updateResponseOfQuizz, updatePokemonsOfQuizz } from "../Redux/Slices/QuizzSlices";
import { useState } from "react";
import useUsers from "./useUsers";
import { updateScore } from "../Redux/Slices/UsersSlices";
import useAnimation from "./useAnimation";



export default function useQuizz(){

    const pokemonsList = useSelector(store => store.pokemons.pokemonsList) // La liste de tout les pokemons
    const pokemonsOfQuizz = useSelector(store => store.quizz.pokemonsOfQuizz) // La list des pokemons du quizz
    const indexOfQuizz = useSelector(store => store.quizz.indexOfQuizz) // L'index du pokemon à afficher
    const numberOfQuestion = useSelector(store => store.parameters.numberOfQuestion) // le nombre de question pour le quizz
    const quizzStart = useSelector(store => store.quizz.quizzStart) // Si le quizz a commencer ou non
    const quizzResponse = useSelector(store => store.quizz.quizzResponse) // S'il faut ou non afficher la correction
    const quizzEnd = useSelector(store => store.quizz.quizzEnd)
    const quizzScore = useSelector(store => store.quizz.quizzScore) // Score effectuer pendant le quizz
    const {getScore} = useUsers()
    const {injectClassAnimationForRefInTimeOut} = useAnimation()
    const dispatch = useDispatch()
    const [quizzScoreInformation, setQuizzScoreInformation] = useState(null)
    
    // Pour démarrer le quizz
    const startQuizz = () => {
        dispatch(updateQuizzStart(true))
    }

    // Change le pokemon en cours de question
    const changeIndex = () => {
        if(indexOfQuizz === numberOfQuestion - 1){ // S'il n'y a plus de pokemon à présenter
            dispatch(updateQuizzEnd(true))
            return
        }
        dispatch(incrementIndex())
    }


    // Génère la liste de pokémons nécessaire pour le quizz
    const getRandomPokemons = () => { 
        if(pokemonsList){
            const newArray = []
            for(let i = 0; i < numberOfQuestion; i++){
                const randomIndex = Math.floor(Math.random() * pokemonsList.length)
                if(pokemonsList[randomIndex].image){
                    newArray.push(pokemonsList[randomIndex])
                }else{
                    i--
                }
                
            }
            dispatch(updatePokemonsOfQuizz(newArray))
        }
    }

    // Génère les réponses possibles pour le pokemon en cours de question
    const getPokemonsNamesAnswer = (pokemon) => {
        const tableauDeReponse = []
        tableauDeReponse.push(pokemon.name) // On push la bonne réponse
        for(let i = 0; i < 3; i++){ // On cherche 3 noms de pokémons faux
            const randomIndex = Math.floor(Math.random() * pokemonsList.length)
            if(pokemonsList[randomIndex].name === pokemon.name){
                i--
            }else{
                tableauDeReponse.push(pokemonsList[randomIndex].name)
            }
        }
        for(let i = tableauDeReponse.length - 1; i>0; i--){ // On mélange le tableau
            const j = Math.floor(Math.random() * (i+1));
            [tableauDeReponse[i], tableauDeReponse[j]] = [tableauDeReponse[j], tableauDeReponse[i]]
        }
        dispatch(updateResponseOfQuizz(tableauDeReponse)) // On met à jour le store
    }

    // Quand l'utilisateur clique sur une réponse
    const handleClickResponse = (e) => {
        if(e.target.dataset.pokename === pokemonsOfQuizz[indexOfQuizz].name){ // Si le bouton sur lequel on a cliquer correspond au pokemon afficher
            dispatch(incrementQuizzScore()) // On augmente le score
        }
        dispatch(updateQuizzResponse(true)) // On affiche les couleur du resultat
        setTimeout(() => { // On passe au prochain pokemon ensuite
            changeIndex()
        }, 500);
    }

    const resetQuizzFull = () => {
        dispatch(resetQuizz())
        getRandomPokemons()
    }

    // Permet de déterminer si on retire ou ajoute des points, false ça en perd, true ça en gagne
    const determineWinOrLoose = (scoreQuizz) => {
        const result = (scoreQuizz * 100) / (numberOfQuestion * 10)
        if(result >= 50){
            return true
        }
        return false
    }

    // Pour calculer les informations nécessaire à l'affichage du score
    const calculQuizzInformations = (userName) => {
        const userScore = getScore(userName) // Score de l'utilisateur
        const trueScore = quizzScore // Score en cas de victoire
        const wrongScore = -((numberOfQuestion * 10) - quizzScore) // Score en cas de défaite
        
        const win = determineWinOrLoose(quizzScore) // Détermine si le joueur gagne ou perd des points
        const styleColor = win ? {color:"rgb(27, 111, 144)"} : {color:"rgb(136, 15, 15)"} // La couleur des numéros selon la victoire
        const logoToShow = win ? <i style={{color:"rgb(13, 75, 120)"}} className="fa-solid fa-angles-up"/> : <i style={{color:"rgb(136, 15, 15)"}} className="fa-solid fa-angles-down"></i> // Logo a afficher selon la victoire
        const boxShadowColor = win ? "rgb(8, 70, 114)" : "rgb(126, 4, 4)" // La couleur de la boite selon la victoire
        const boxShadowStyle = {boxShadow: `0px 0px 10px 10px ${boxShadowColor}, 0px 0px 25px 5px ${boxShadowColor} inset`} // Style de la boite

        const payloadNewScore = win ? userScore + trueScore : userScore + wrongScore // Le nouveau score à sauvegarder

        setQuizzScoreInformation({ // Le setState nécessaire pour pouvoir afficher les informartions dans le composant QuizzScore
            oldScoreToShow: userScore,
            quizzScoreToShow: win ? trueScore : wrongScore,
            newScoreToShow: payloadNewScore,
            poucentOfCorrectAnswer: ((quizzScore * 100) / (numberOfQuestion * 10)).toFixed(),
            differenceBetweenScore: payloadNewScore < 0 ? -userScore : win ? trueScore : wrongScore, // Mdr le ternaire
            styleColor,
            logoToShow,
            boxShadowStyle,
            win,
        })
        dispatch(updateScore({userName, newScore:payloadNewScore})) // La sauvegarde du nouveau score
    }

    const injectIncrementScoreAnimation = (scoreToIncrementRef) => {
        const timeOutID = setTimeout(() => {

            let frame = 50 / (Math.abs(quizzScoreInformation?.differenceBetweenScore) / 10)
            console.log("Frame : ", frame)
            console.log("DifferenceBetweenScore : ", quizzScoreInformation?.differenceBetweenScore)
            if(frame === Infinity){frame = 50}

            const intervalID = setInterval(() => {
                setQuizzScoreInformation(current => {
                    const controlValue = current.newScoreToShow < 0 ? 0 : current.newScoreToShow
                    if(current.oldScoreToShow === controlValue){
                        injectClassAnimationForRefInTimeOut([{ref:scoreToIncrementRef, class:"newScoreAnimation", delay:0}])
                        clearInterval(intervalID)
                        return current
                    }
                    if(current.win){
                        return {...current, oldScoreToShow : current.oldScoreToShow + 1}
                    }else{
                        return {...current, oldScoreToShow : current.oldScoreToShow - 1}
                    }
                    
                })
            }, frame);
        }, 3500);
        return timeOutID
    }

    

    return{
        changeIndex,
        getRandomPokemons,
        getPokemonsNamesAnswer,
        handleClickResponse,
        quizzStart,
        quizzEnd,
        startQuizz,
        resetQuizzFull,
        determineWinOrLoose,
        quizzScoreInformation,
        calculQuizzInformations,
        setQuizzScoreInformation,
        injectIncrementScoreAnimation
    }
}