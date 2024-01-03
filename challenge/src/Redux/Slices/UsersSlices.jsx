import {createSlice} from "@reduxjs/toolkit"

const localStorageData = JSON.parse(localStorage.getItem("users"))

const UsersSlice = createSlice({
    name:"users",
    initialState: localStorageData ? localStorageData : [],
    reducers:{
        addUsers:(state, action) => {
            state.push(action.payload)
        },
        updateScore:(state, action) => {
            const correctUser = state.find(user => user.name === action.payload.userName)
            correctUser.score = action.payload.newScore
        }
    },
})

export const UsersSliceReducer = UsersSlice.reducer
export const {addUsers, updateScore} = UsersSlice.actions