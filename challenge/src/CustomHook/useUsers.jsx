import React, {useEffect, useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUsers } from "../Redux/Slices/UsersSlices";
import { useNavigate } from "react-router-dom";
import { changeSecure } from "../Redux/Slices/SecureSlices";
import queryString from "query-string";

export default function useUsers(){

    const users = useSelector(state => state.users)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const inputUserName = useRef()

    const generateNewToken = () => {
        let token = ""

        for(let i = 0; i < 8; i++){
            const randomNumber = Math.floor(Math.random() * 10)
            token += randomNumber
        }

        return token
    }


    const submitNewUsers = (e) => {
        e.preventDefault()
        const userName = (inputUserName.current.value).trim()
        const userExist = users.find(user => user.name === userName)
        const userNameHaveSpace = /\s/.test(userName)


        if(userName === ""){ // S'il n'y a pas de nom de renseigner
            window.alert("Merci de renseigner un nom d'utilisateur")
            return
        }

        if(userNameHaveSpace){
            window.alert("Attention, le nom d'utilisateur doit être composé d'un seul mot, sans espaces.")
            return
        }
        
        if(userExist){ // Si l'utilisateur existe déjà
            window.alert("Nom d'utilisateur déjà enregistrer, merci d'en choisir un nouveau")
        }
        else{ // Sinon
            const newObject = {
                name:userName,
                token:generateNewToken()
            }
            dispatch(addUsers(newObject)) // On met à jour notre state Users
            dispatch(changeSecure(true))
            navigate("../codeGiver?userName="+encodeURIComponent(userName))
        }
    }

    const findToken = (location) => {
        const query = queryString.parse(location.search)
        const userName = query.userName
        const currentUser = users.find(user => user.name === userName)
        if(currentUser){
            return currentUser.token
        }else{
            return false
        }
        
    }

    



    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users))
    }, [users])

    return{submitNewUsers, inputUserName, generateNewToken, findToken}
}