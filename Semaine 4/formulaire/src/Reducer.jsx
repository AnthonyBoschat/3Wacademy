import React from "react";
import { useEffect } from "react";
import { useReducer } from "react";

export default function useDice(){
    const initialDiceState = {
        numberDice:3,
        repetition:50,
        brelan:0,
        diceMemory:[

        ]
    }

    const ACTIONS_DICES = {
        UPDATE_REPETITION:"UPDATE_REPETITION",
        UPDATE_BRELAN:"UPDATE_BRELAN",
        UPDATE_DICEMEMORY:"UPDATE_DICEMEMORY",
        CLEAR:"CLEAR",
    }

    const reducer = (state, action) => {
        switch(action.type){
            case ACTIONS_DICES.UPDATE_REPETITION:
                return {...state, repetition:action.payload}
            case ACTIONS_DICES.UPDATE_DICEMEMORY:
                return {...state, diceMemory: [...state.diceMemory, action.payload]}
            case ACTIONS_DICES.CLEAR:
                return {...state, diceMemory: []}
            case ACTIONS_DICES.UPDATE_BRELAN:
                return {...state, brelan : state.brelan + 1}
        }
    }

    const [diceState, dispatchDice] = useReducer(reducer, initialDiceState)

    const rollTheDice = () => {
        // On clear le diceMemory
        dispatchDice({type:ACTIONS_DICES.CLEAR})
        // Pour le nombre de repetition voulu
        for(let x = 0; x < diceState.repetition; x++){
            let tableauOfDice = []
            // Lancer 3 nombres aléatoire entre 1 et 6
            for(let i = 0; i < diceState.numberDice; i++){
                tableauOfDice.push(Math.floor(Math.random() * 6 + 1)) 
            }
            dispatchDice({type:ACTIONS_DICES.UPDATE_DICEMEMORY, payload:tableauOfDice})
        }
    }

    const analysBrelan = (diceRoll) => {
        let result = 0
        for(let x = 0; x<diceRoll.length; x++){
            result += diceRoll[x]
        }
        if(result === 18){
            dispatchDice({type:ACTIONS_DICES.UPDATE_BRELAN})
            return true
        }
        return false
    }


    return{
        analysBrelan,
        diceState,
        ACTIONS_DICES,
        dispatchDice,
        rollTheDice,
    }
}