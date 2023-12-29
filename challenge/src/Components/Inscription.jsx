import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {BrowserRouter as Routeur, Route, Link, Routes, Navigate} from "react-router-dom"
import { addUser } from "../Redux/Slices/UsersSlices";

function Inscription(){
    
    const inputUserName = useRef()
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()



    const handleSubmit = (e) => {
        e.preventDefault()
        const userName = inputUserName.current.value
        const userExist = users.find(user => user === userName)

        if(userName === ""){ // S'il n'y a pas de nom de renseigner
            window.alert("Merci de renseigner un nom d'utilisateur")
            return
        }
        
        if(userExist){ // Si l'utilisateur existe déjà
            window.alert("Nom d'utilisateur déjà enregistrer, merci d'en choisir un nouveau")
        }
        else{ // Sinon
            dispatch(addUser(userName)) // On met à jour notre state Users
        }
    }

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users))
    }, [users]) // A chaque fois que le state Users est modifier, on enregistre le nouveau tableau dans le localStorage

    

    return(
        <div className="inscriptionOverlay">
            <Link className="back" to="/">Retour</Link>
            <form onSubmit={handleSubmit} action="">
                <input ref={inputUserName} placeholder="Nom d'utilisateur" type="text" />
                <input type="submit" value="S'inscrire" />
            </form>
        </div>
    )
}

export default Inscription;