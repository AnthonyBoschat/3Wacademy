import React from "react";
import {useSelector} from "react-redux"


function Result(){
    const rendu = useSelector(state => state.rendu)
    const denominations = useSelector(state => state.denominations)

    const generateListRendu = (element) => {
        return(
            <li key={element}>{`Denomination de ${element} => ${rendu[element]}`}</li>
        )
    }

    return(
        <ul>
            {denominations.map(element => generateListRendu(element))}
        </ul>
    )
}

export default Result;