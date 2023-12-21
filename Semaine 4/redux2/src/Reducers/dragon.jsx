import { ADD_DRAGON, REMOVE_DRAGON } from "../Constants/actions";


const dragonInitialState = {
    dragons:[
        "Apalala",
        "Smaug",
        "Balaur",
        "Bolla",
    ],
    count:0
}

export const reducerDragon = (state = dragonInitialState, action) => {
    switch(action.type){
        case ADD_DRAGON:
            return {...state, dragons:[...state.dragons, action.payload]}
        case REMOVE_DRAGON:
            return {...state, dragons:state.dragons.filter(dragon => dragon !== action.payload)}
        default:
            return state
    }
}


