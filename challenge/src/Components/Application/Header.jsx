import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header(){

    const pokemonsList = useSelector(store => store.pokemons.pokemonsList)

    return(
        <header>
            <div className="headerButtonBox">
                <Link className="navButton" to="./accueil"><button>Accueil</button></Link>
                <Link className="navButton" to="./quizz"><button disabled={!pokemonsList}>Quizz</button></Link>
                <Link className="navButton" to="./statistique"><button disabled={!pokemonsList}>Statistique</button></Link>
            </div>
        </header>
    )
}

export default Header;