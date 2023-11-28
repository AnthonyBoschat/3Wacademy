import React, { useContext } from "react";
import { StateContext } from "../Contexts/Context";

function MessageList(){
    /////// STATE /////////
    const {messageMemory, dispatchMessageMemory, ACTIONS} = useContext(StateContext)


    const handleDelete = (message) => {
        const response = window.confirm("Supprimer cette entrée ?")
        if(response){
            dispatchMessageMemory({type:ACTIONS.DELETE_TEXT, payload:message.index})
        }
    }

    /////// METHODE /////////
    const generateMessage = (message) => {
        return(
            <div key={message.index}>
                <div onClick={() => handleDelete(message)} style={message.style}>{message.text}</div>
            </div>
        )
    }

    /////// RENDER /////////
    return(
        <div className="messageListBox">
            {messageMemory.map(message => generateMessage(message))}
        </div>
    )
}

export default MessageList;