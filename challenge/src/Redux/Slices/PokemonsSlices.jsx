import {createSlice} from "@reduxjs/toolkit"


const pokemonsSlice = createSlice({
    name:"pokemons",
    initialState:{
        pokemonsList:null,
        pokemonsToShow:[],
        pokemonsOfQuizz:[],
        indexOfQuizz:0,
        responseOfQuizz:[]
    },
    reducers:{
        updatePokemonsList:(state, action) => {
            state.pokemonsList = action.payload
        },
        updatePokemonsToShow:(state, action) => {
            state.pokemonsToShow = action.payload
        },
        updatePokemonsOfQuizz:(state, action) => {
            state.pokemonsOfQuizz = action.payload
        },
        incrementIndex:(state, action) => {
            state.indexOfQuizz = state.indexOfQuizz + 1
        },
        updateResponseOfQuizz:(state, action) => {
            state.responseOfQuizz = action.payload
        }
    },
})

export const pokemonsSliceReducer = pokemonsSlice.reducer
export const {updatePokemonsList, updatePokemonsToShow, updatePokemonsOfQuizz, incrementIndex, updateResponseOfQuizz} = pokemonsSlice.actions