import { combineReducers } from "@reduxjs/toolkit"
import { UsersSliceReducer } from "./Slices/UsersSlices"
import { SecureSliceReducer } from "./Slices/SecureSlices"
import { pokemonsSliceReducer } from "./Slices/PokemonsSlices"
import { GlobalParameterReducer } from "./Slices/GlobalParameterSlices"
import { QuizzSliceReducer } from "./Slices/QuizzSlices"

const rootReducer = combineReducers({
    users: UsersSliceReducer,
    secure: SecureSliceReducer, // Ajouter les sliceReducer voulu
    pokemons: pokemonsSliceReducer,
    parameters: GlobalParameterReducer,
    quizz: QuizzSliceReducer, // Ajouter les sliceReducer voulu
})

export default rootReducer