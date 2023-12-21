import React from "react";
import { useDispatch, useSelector } from "react-redux"
import {calcul} from "../Actions/actions_types"
import { useRef } from "react";

function Form(){

    const denominations = useSelector(state => state.denominations)
    const dispatch = useDispatch()
    const inputAmountRef = useRef()

    const filtrage = () => {
        const newRendu = {100:0,50:0,20:0,10:0,5:0,1:0}
        let controleValue = inputAmountRef.current.value
        for(let number of denominations){
            let controle = true
            while(controle){
                if(controleValue - number >= 0){
                    controleValue -= number
                    newRendu[number] = newRendu[number] + 1
                }else{controle = false}
            }
        }
        return newRendu
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(calcul(filtrage()))
    }



    
    return(
        <form onSubmit={handleSubmit} action="">
            <div>
                <label htmlFor="amount">Renseigner un montant</label>
                <input ref={inputAmountRef} type="number" id="amount" />
            </div>
            <div>
                <input type="submit" value="Lancer" />
            </div>
        </form>
    )
}

export default Form;