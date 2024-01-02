import { useDispatch, useSelector } from "react-redux";
import { incrementQuizzScore, resetQuizz, updateQuizzEnd, updateQuizzResponse, updateQuizzStart, incrementIndex, updateResponseOfQuizz, updatePokemonsOfQuizz } from "../Redux/Slices/QuizzSlices";



export default function useQuizz(){

    const pokemonsList = useSelector(store => store.pokemons.pokemonsList) // La liste de tout les pokemons
    const pokemonsOfQuizz = useSelector(store => store.quizz.pokemonsOfQuizz) // La list des pokemons du quizz
    const indexOfQuizz = useSelector(store => store.quizz.indexOfQuizz) // L'index du pokemon à afficher
    const numberOfQuestion = useSelector(store => store.parameters.numberOfQuestion) // le nombre de question pour le quizz
    const quizzStart = useSelector(store => store.quizz.quizzStart) // Si le quizz a commencer ou non
    const quizzResponse = useSelector(store => store.quizz.quizzResponse) // S'il faut ou non afficher la correction
    const quizzEnd = useSelector(store => store.quizz.quizzEnd)
    const dispatch = useDispatch()
    
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
                newArray.push(pokemonsList[randomIndex])
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

    return{
        changeIndex,
        getRandomPokemons,
        getPokemonsNamesAnswer,
        handleClickResponse,
        quizzStart,
        quizzEnd,
        startQuizz,
        resetQuizzFull
    }
}