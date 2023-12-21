import {combineReducers, createStore} from "redux"
import { counterReducer } from "../Reducers/CounterReducer"
import { nameReducer } from "../Reducers/NameReducer"

const rootReducer = combineReducers({
    counterStore:counterReducer,
    nameReducer:nameReducer,
})

const counterStore = createStore(rootReducer)

export default counterStore
