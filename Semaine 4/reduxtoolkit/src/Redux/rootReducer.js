import { combineReducers } from "@reduxjs/toolkit";
import { profilSliceReducer } from "./Slices/ProfilSlice";

const rootReducer = combineReducers({
    profil:profilSliceReducer
})

export default rootReducer