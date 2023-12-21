import { ACTION_COUNT } from "../Constants/actions";

export function calcul(payload){
    return{
        type:ACTION_COUNT, payload
    }
}