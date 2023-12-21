import { ADD_DRAGON, REMOVE_DRAGON } from "../Constants/actions";

export const addDragon = (payload) => {
    return{
        type:ADD_DRAGON, payload
    }
}

export const removeDragon = (payload) => {
    return{
        type:REMOVE_DRAGON, payload
    }
}
