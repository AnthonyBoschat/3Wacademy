import {createStore} from "redux"
import { denominationReducer } from "../Reducers/denominationReducer"

export const denominationStore = createStore(denominationReducer)