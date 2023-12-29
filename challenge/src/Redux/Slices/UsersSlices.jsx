import {createSlice} from "@reduxjs/toolkit"

const localStorageData = JSON.parse(localStorage.getItem("users"))

const UsersSlice = createSlice({
    name:"users",
    initialState: localStorageData ? localStorageData : [],
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