import React, { useState } from "react";

function BottomButtons({handleChangeStep, handlePreviousStep,BouttonDisabled}){

    

    return(
        <div id="bottom-wizard">
            <button onClick={handlePreviousStep} type="button" name="backward" className="backward">
            Prev
            </button>
            <button disabled={BouttonDisabled} onClick={handleChangeStep} type="button" name="forward" className="forward">
            Next
            </button>
            <button type="submit" name="process" className="submit">
            Submit
            </button>
        </div>
    )
}

export default BottomButtons;