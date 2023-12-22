import { combineReducers } from "@reduxjs/toolkit"
import { UsersSliceReducer } from "./Slices/UsersSlices"

const rootReducer = combineReducers({
    users:UsersSliceReducer // Ajouter les sliceReducer voulu
})

export default rootReducer