import React, { useEffect } from "react";
import { BrowserRouter as Routeur, Route, Link, Routes } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { addUser, saveUsers } from "../Redux/Slices/UsersSlices";

function Authentication() {


    return (
        <div className="authenticationOverlay">
            <div className="authenticationBox">
                <form action="">
                    <input placeholder="Code d'authentification" type="text" />
                    <input value="Se connecter" type="submit" />
                    <div>Pas encore de compte ? <Link to={"inscription"}>Créé un compte</Link></div>
                </form>
            </div>
        </div>
    )
}

export default Authentication;