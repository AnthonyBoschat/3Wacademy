import { useDispatch, useSelector } from "react-redux";
import { incrementIndex, updatePokemonsOfQuizz, updateResponseOfQuizz } from "../Redux/Slices/PokemonsSlices";



export default function useQuizz(){

    const indexOfQuizz = useSelector(store => store.pokemons.indexOfQuizz)
    const pokemonsList = useSelector(store => store.pokemons.pokemonsList)
    const dispatch = useDispatch()

    const changeIndex = () => {
        if(indexOfQuizz === 3){
            return
        }
        dispatch(incrementIndex())
    }

    const getRandomPokemons = () => {
        if(pokemonsList){
            const newArray = []
            for(let i = 0; i<4; i++){
                const randomIndex = Math.floor(Math.random() * pokemonsList.length)
                newArray.push(pokemonsList[randomIndex])
            }
            dispatch(updatePokemonsOfQuizz(newArray))
        }
    }

    const getPokemonsNamesAnswer = (pokemon) => {
        const tableauDeReponse = []
        tableauDeReponse.push(pokemon.name)
        for(let i = 0; i<3; i++){
            const randomIndex = Math.floor(Math.random() * pokemonsList.length)
            if(pokemonsList[randomIndex].name === pokemon.name){
                i--
            }else{
                tableauDeReponse.push(pokemonsList[randomIndex].name)
            }
        }
        for(let i = tableauDeReponse.length - 1; i>0; i--){
            const j = Math.floor(Math.random() * (i+1));
            [tableauDeReponse[i], tableauDeReponse[j]] = [tableauDeReponse[j], tableauDeReponse[i]]
        }
        // On mélange le tableau
        dispatch(updateResponseOfQuizz(tableauDeReponse))
    }

    return{
        changeIndex,
        getRandomPokemons,
        getPokemonsNamesAnswer
    }
}