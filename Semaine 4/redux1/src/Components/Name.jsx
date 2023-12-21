import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NAME_ACTIONS } from "../Reducers/NameReducer";

function Name(){

    const nameValue = useSelector(state => state.nameReducer.name)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch({type:NAME_ACTIONS.CHANGE, payload:inputRef.current.value})
        inputRef.current.value = ""
    }

    const inputRef = useRef()
    return(
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={handleClick}>Changer le nom</button>
            <div>{nameValue}</div>
        </div>
    )
}

export default Name;