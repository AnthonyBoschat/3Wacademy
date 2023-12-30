import {createSlice} from "@reduxjs/toolkit"

const localStorageData = JSON.parse(localStorage.getItem("users"))

const UsersSlice = createSlice({
    name:"users",
    initialState: localStorageData ? localStorageData : [],
    reducers:{
        addUsers:(state, action) => {
            state.push(action.payload)
        },
    },
})

export const UsersSliceReducer = UsersSlice.reducer
export const {addUsers} = UsersSlice.actions