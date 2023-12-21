import {createSlice} from "@reduxjs/toolkit"

const profilSlice = createSlice({
    name:"profil",
    initialState:{
        firstname:"Anthony",
        lastname:"Boschat",
        age:29,
    },
    reducers:{
        changeFirstname: (state, action) => {
            state.firstname = action.payload
        },
        changeLastname: (state, action) => {
            state.lastname = action.payload
        },
        changeAge: (state, action) => {
            state.age = action.payload
        }
    }
})

export const profilSliceReducer = profilSlice.reducer
export const {changeFirstname, changeLastname, changeAge} = profilSlice.actions