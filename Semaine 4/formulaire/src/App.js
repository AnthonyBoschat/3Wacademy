import { useState } from "react";
import "./Style/Main.css"
import BaseNumberInput from "./Components/BaseNumberInput";

function App() {

  const [number, setNumber] = useState("")

  const handleChange = (value) => {
    if(isNaN(parseInt(value))){
      setNumber("")
    }else{
      setNumber(parseInt(value))
    }
  }

  return (
    <main>
      <BaseNumberInput
        onChangeBase={handleChange}
        number={number}
      />
      <BaseNumberInput
        number={number.toString(2)}
      />
    </main>
  );
}

export default App;
