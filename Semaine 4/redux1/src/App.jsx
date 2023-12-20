import React from "react";
import { Provider } from "react-redux";
import store from "./Store/index"; // Importez votre store
import Counter from "./Components/Counter"; // Importez votre composant Counter

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Counter App</h1>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;