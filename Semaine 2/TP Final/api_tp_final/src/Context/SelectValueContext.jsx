
import React, { createContext, useState } from "react";

// On définie un contexte
export const SelectValueContext = createContext();

// On définie son provider et les state par défaut
export const SelectValueProvider = ({children}) => {
    const [allSelectValue, setAllSelectValue] = useState({
        sexeValue:"",
        numberVisible: "5",
        directionTemp: "undefined",
    })
    const [Lists, setLists] = useState([])
    const [profiles, setProfiles] = useState([])

    return(
        <SelectValueContext.Provider value={{allSelectValue, setAllSelectValue, Lists, setLists, profiles, setProfiles}}>
            {children}
        </SelectValueContext.Provider>
    )
}