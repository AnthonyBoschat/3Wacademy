import {createSlice} from "@reduxjs/toolkit"

const QuizzSlice = createSlice({
    name:"quizz",
    initialState:{
        quizzStart:false,
        quizzResponse:false,
        quizzEnd:false,
        quizzScore:0,
        pokemonsOfQuizz:[],
        indexOfQuizz:0,
        responseOfQuizz:[]
    },
    reducers:{
        updateQuizzStart:(state,action) => {
            state.quizzStart = action.payload
        },
        updateQuizzResponse:(state,action) => {
            state.quizzResponse = action.payload
        },
        updateQuizzEnd:(state,action) => {
            state.quizzEnd = action.payload
        },
        incrementQuizzScore:(state,action) => {
            state.quizzScore = state.quizzScore + 10
        },
        updatePokemonsOfQuizz:(state, action) => {
            state.pokemonsOfQuizz = action.payload
        },
        incrementIndex:(state, action) => {
            state.indexOfQuizz = state.indexOfQuizz + 1
        },
        changeIndex:(state, action) => {
            state.indexOfQuizz = action.payload
        },
        updateResponseOfQuizz:(state, action) => {
            state.responseOfQuizz = action.payload
        },
        resetQuizz:(state,action) => {
            return state = {
                quizzStart:false,
                quizzResponse:false,
                quizzEnd:false,
                quizzScore:0,
                pokemonsOfQuizz:[],
                indexOfQuizz:0,
                responseOfQuizz:[]
            }
        }
    },
})

export const QuizzSliceReducer = QuizzSlice.reducer
export const {
    updateQuizzStart,
    updateQuizzResponse,
    updateQuizzEnd,
    incrementQuizzScore,
    updatePokemonsOfQuizz,
    incrementIndex,
    changeIndex,
    updateResponseOfQuizz,
    resetQuizz
} = QuizzSlice.actions