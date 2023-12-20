import { createStore } from "redux";
import { counterReducer } from "../Reducers/CounterReducer"; // Importez votre reducer

// Créez le store en utilisant votre reducer
const store = createStore(counterReducer);

export default store;