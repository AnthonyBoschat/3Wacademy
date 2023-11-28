import React, { createContext, useReducer, useState } from "react";
import { ACTIONS, reduceStateOfMessage, reduceListOfMessage } from "../Reducer/ReducerStore"

// On définie un contexte
export const StateContext = createContext();

// On définie son provider et les state par défaut
export const StateProvider = ({children}) => {

    const [formParameter, dispatchFormParameter] = useReducer(reduceStateOfMessage, {text:"", policy:"Arial", color:"black", size:"10"})
    const [messageMemory, dispatchMessageMemory] = useReducer(reduceListOfMessage, [])
    const [index, setIndex] = useState(0)


    ///// RENDER DU CONTEXTE //////
    return(
        <StateContext.Provider value={{index, setIndex, ACTIONS, reduceStateOfMessage, formParameter, dispatchFormParameter, messageMemory, dispatchMessageMemory}}>
            {children}
        </StateContext.Provider>
    )
}