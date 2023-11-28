import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "../Contexts/Context";
import inputHook from "../CustomHook/InputHook";

function Formulaire(){

    /////// STATE /////////
    const {ACTIONS, formParameter, dispatchFormParameter, dispatchMessageMemory, index, setIndex} = useContext(StateContext)
    const {generateInput, formulaireInputsList} = inputHook(formParameter)

    

    /////// METHODE /////////
    const handleSubmitFormulaire = (event) => {
        event.preventDefault()
        const newMessage = {
            index:index,
            text:formParameter.text,
            style:{
                fontSize:`${formParameter.size}px`,
                color: formParameter.color,
                fontFamily: formParameter.policy
            }}
        dispatchMessageMemory({type:ACTIONS.ADD_TEXT, payload:newMessage})
        dispatchFormParameter({type:ACTIONS.CLEAN})
        setIndex(current => current + 1)
    }

    /////// RENDER /////////
    return(
        <form action="" onSubmit={handleSubmitFormulaire}>
            {formulaireInputsList.map(input => generateInput(input, dispatchFormParameter))}
            <input type="submit" value={"Générer le texte"}/>
        </form>
    )
}

export default Formulaire;