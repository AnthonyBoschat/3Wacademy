import React from "react";
import { Link } from "react-router-dom";

function Header(){

    return(
        <header>
            <div className="headerButtonBox">
                <Link className="navButton" to="./accueil">Accueil</Link>
                <Link className="navButton" to="./quizz">Quizz</Link>
                <Link className="navButton" to="./statistique">Statistique</Link>
            </div>
        </header>
    )
}

export default Header;