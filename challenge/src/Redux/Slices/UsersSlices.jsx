import {createSlice} from "@reduxjs/toolkit"

const UsersSlice = createSlice({
    name:"users",
    initialState:[],
    reducers:{
        addUser:(state, action) => {
            state.push(action.payload)
        },
        saveUsers:(state, action) => {
            return state = action.payload
        }
    },
})

export const UsersSliceReducer = UsersSlice.reducer
export const {addUser, saveUsers} = UsersSlice.actions