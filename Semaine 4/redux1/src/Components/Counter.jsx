import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { COUNTER_ACTION } from "../Reducers/CounterReducer"; // Assurez-vous d'importer correctement votre action

function Counter() {
  const counterState = useSelector((state) => state.value); // Accédez à l'état du compteur
  const dispatch = useDispatch(); // Obtenez la fonction de dispatch

  const increment = () => {
    // Dispatchez l'action d'incrémentation
    dispatch({ type: COUNTER_ACTION.INCREMENT });
  };

  const decrement = () => {
    // Dispatchez l'action de décrémentation
    dispatch({ type: COUNTER_ACTION.DECREMENT });
  };

  return (
    <div>
      <h2>Counter Value: {counterState}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;