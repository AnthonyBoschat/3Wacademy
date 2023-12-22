import React from "react";

function Authentication(){

    return(
        <div className="authenticationOverlay">
            <div className="authenticationBox">
                <form action="">
                    <input placeholder="Code d'authentification" type="text" />
                    <input value="Se connecter" type="submit" />
                    <div>Pas encore de compte ? <span>Créé un compte</span></div>
                </form>
            </div>
        </div>
    )
}

export default Authentication;