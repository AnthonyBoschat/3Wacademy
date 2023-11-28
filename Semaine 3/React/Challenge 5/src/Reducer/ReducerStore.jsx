export const ACTIONS = {
    CHANGE_TEXT:"CHANGE_TEXT",
    CHANGE_SIZE:"CHANGE_SIZE",
    CHANGE_COLOR:"CHANGE_COLOR",
    CHANGE_POLICY:"CHANGE_POLICY",
    ADD_TEXT:"ADD_TEXT",
    DELETE_TEXT:"DELETE_TEXT",
    CLEAN:"CLEAN",
}

export function reduceStateOfMessage(state, action){
    switch(action.type){
        case ACTIONS.CHANGE_TEXT:
            return {...state, text:action.payload}
        case ACTIONS.CHANGE_SIZE:
            return {...state, size:action.payload}
        case ACTIONS.CHANGE_COLOR:
            return {...state, color:action.payload}
        case ACTIONS.CHANGE_POLICY:
            return {...state, policy:action.payload}
        case ACTIONS.CLEAN:
            return {...state, text:""}
        default:
            return {...state}
    }
}


export function reduceListOfMessage(state, action){
    switch(action.type){
        case ACTIONS.ADD_TEXT:
            return [...state, action.payload]
        case ACTIONS.DELETE_TEXT:
            const newState = state.filter(element => element.index !== action.payload)
            return newState
        default:
            return state
    }
}