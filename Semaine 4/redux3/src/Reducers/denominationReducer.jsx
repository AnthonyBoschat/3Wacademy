import { ACTION_COUNT } from "../Constants/actions"

const DENOMINATION_InitialState = {
    denominations:[100, 50, 20, 10, 5, 1],
    rendu:{
        100:0,
        50:0,
        20:0,
        10:0,
        5:0,
        1:0,
    }
}

export const denominationReducer = (state = DENOMINATION_InitialState, action) => {
    switch(action.type){

        case ACTION_COUNT:
            return {...state, rendu:action.payload}
            
        default:
            return state
    }
}