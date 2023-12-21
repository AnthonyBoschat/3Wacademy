import React from "react";
import counterStore from "./Store";
import {Provider} from "react-redux";
import Counter from "./Components/Counter";
import Name from "./Components/Name";

function App() {
  return (
    <Provider store={counterStore}>
      <Counter/>
      <Name/>
    </Provider>
  );
}

export default App;