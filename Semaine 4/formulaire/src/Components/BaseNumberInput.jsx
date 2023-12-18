import React from "react";

function BaseNumberInput({number, onChangeBase}){

    return(
        <input type="number" value={number} onChange={(e) => onChangeBase(e.target.value)} />
    )
}

export default BaseNumberInput;