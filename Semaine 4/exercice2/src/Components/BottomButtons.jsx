import React from "react";

function BottomButtons(){

    return(
        <div id="bottom-wizard">
            <button type="button" name="backward" className="backward">
            Prev
            </button>
            <button type="button" name="forward" className="forward">
            Next
            </button>
            <button type="submit" name="process" className="submit">
            Submit
            </button>
        </div>
    )
}

export default BottomButtons;