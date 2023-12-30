import queryString from "query-string";
import React from "react";
import { useLocation } from "react-router-dom";

function Accueil(){

    const location = useLocation()
    const query = queryString.parse(location.search)
    const userName = query.userName

    return(
        <>
            <h1>Bonjour {userName}</h1>
        </>
    )
}

export default Accueil;