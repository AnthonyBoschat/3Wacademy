import React, { useEffect } from "react";
import { BrowserRouter as Routeur, Route, Link, Routes } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { addUser, saveUsers } from "../Redux/Slices/UsersSlices";

function Authentication() {

    const dispatch = useDispatch()

    useEffect(() => {
        const localStorageData = JSON.parse(localStorage.getItem("users")) // On récupère le localStorage
        if (localStorageData) { // S'il existe un localStorage
            dispatch(saveUsers(localStorageData)) // On modifier notre state Users
        }
    }, []) // Se a chaque montage du composant


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