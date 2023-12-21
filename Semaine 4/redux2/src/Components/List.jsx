import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {removeDragon} from "../Actions/actions_types"

function List(){

    const dragons = useSelector(state => state.dragons)
    const dispatch = useDispatch()

    const handleCLick = (dragon) => {
        dispatch(removeDragon(dragon))
    }

    return(
        <ul>
            {dragons.map(dragon => (<li onClick={() => handleCLick(dragon)} key={dragon + Date.now()}>{dragon}</li>))}
        </ul>
    )
}

export default List;