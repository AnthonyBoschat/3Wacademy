import { combineReducers } from "@reduxjs/toolkit"
import { UsersSliceReducer } from "./Slices/UsersSlices"
import { SecureSliceReducer } from "./Slices/SecureSlices"
import { pokemonsSliceReducer } from "./Slices/PokemonsSlices"

const rootReducer = combineReducers({
    users: UsersSliceReducer,
    secure: SecureSliceReducer, // Ajouter les sliceReducer voulu
    pokemons: pokemonsSliceReducer, // Ajouter les sliceReducer voulu
})

export default rootReducer