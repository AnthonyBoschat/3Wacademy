import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { updateNumberOfQuestion } from "../../Redux/Slices/GlobalParameterSlices";
import useQuizz from "../../CustomHook/useQuizz";
import useUsers from "../../CustomHook/useUsers";

function Header(){

    const pokemonsList = useSelector(store => store.pokemons.pokemonsList)
    const params = useParams()
    const {getScore} = useUsers()
    const {resetQuizzFull} = useQuizz()
    const dispatch = useDispatch()

    return(
        <header>


            <select onChange={(e) => dispatch(updateNumberOfQuestion(e.target.value))} name="" id=""> 
                <option value="10">10</option>
                <option value="5">5</option>
                <option value="3">3</option>
                <option value="1">1</option>
            </select>

            


            <div className="headerButtonBox">
                <div className="profilScore">
                    <i className="fa-solid fa-star"></i>
                    <span>{getScore(params.userName)}</span>
                </div>
                <Link className="navButton" to="./accueil"><button>Accueil</button></Link>
                <Link className="navButton" to="./quizz"><button onClick={resetQuizzFull} disabled={!pokemonsList}>Quizz</button></Link>
                <Link className="navButton" to="./statistique"><button disabled={!pokemonsList}>Statistique</button></Link>
            </div>
        </header>
    )
}

export default Header;