import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeAge, changeFirstname, changeLastname } from "../Redux/Slices/ProfilSlice";

function Profil(){

    const firstnameInput = useRef()
    const lastnameInput = useRef()
    const ageInput = useRef()


    const profilState = useSelector(state => state.profil)
    const dispatch = useDispatch()

    return(
        <div>
            <div>
                <h1>{profilState.firstname}</h1>
                <input ref={firstnameInput} type="text" />
                <button onClick={() => dispatch(changeFirstname(firstnameInput.current.value))}>Modifier</button>
            </div>
            <div>
                <h1>{profilState.lastname}</h1>
                <input ref={lastnameInput} type="text" />
                <button onClick={() => dispatch(changeLastname(lastnameInput.current.value))}>Modifier</button>
            </div>
            <div>
                <h1>{profilState.age}</h1>
                <input ref={ageInput} type="text" />
                <button onClick={() => dispatch(changeAge(ageInput.current.value))}>Modifier</button>
            </div>
            
        </div>
    )
}

export default Profil;