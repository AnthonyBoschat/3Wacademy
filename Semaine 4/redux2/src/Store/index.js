import {createStore} from "redux"
import {reducerDragon} from "../Reducers/dragon"

export const dragonStore = createStore(reducerDragon)