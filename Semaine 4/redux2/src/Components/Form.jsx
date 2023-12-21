import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addDragon } from "../Actions/actions_types";

function Form(){

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addDragon(inputRef.current.value))
        inputRef.current.value = ""
    }

    const inputRef = useRef()
    return(
        <form onSubmit={handleSubmit} action="">
            <label htmlFor="input">Ajoutez un Dragon</label>
            <input ref={inputRef} id="input" type="text" />
            <input type="submit" value="AJOUTER" />
        </form>
    )
}

export default Form;