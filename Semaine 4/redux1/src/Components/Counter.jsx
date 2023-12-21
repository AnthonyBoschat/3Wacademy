import { useSelector, useDispatch } from "react-redux";
import { COUNTER_ACTIONS } from "../Reducers/CounterReducer";

function Counter(){
    const counterValue = useSelector(state => state.counterStore.value)
    const dispatch = useDispatch()

    return(
        <main>
            <div>Valeur : {counterValue}</div>
            <button onClick={() => dispatch({type:COUNTER_ACTIONS.INCREMENT})}> Augmenter</button>
            <button onClick={() => dispatch({type:COUNTER_ACTIONS.DECREMENT})}>Diminuer</button>
        </main>
    )
}

export default Counter;