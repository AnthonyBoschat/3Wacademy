import { combineReducers } from "@reduxjs/toolkit"
import { UsersSliceReducer } from "./Slices/UsersSlices"
import { SecureSliceReducer } from "./Slices/SecureSlices"

const rootReducer = combineReducers({
    users: UsersSliceReducer,
    secure: SecureSliceReducer // Ajouter les sliceReducer voulu
})

export default rootReducer