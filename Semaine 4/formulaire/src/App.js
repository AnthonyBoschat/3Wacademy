import { useState } from "react";
import "./Style/Main.css"
import BaseNumberInput from "./Components/BaseNumberInput";

function App() {

  const [number, setNumber] = useState("")

  const handleChangeDecToBin = (value) => {
    if(isNaN(parseInt(value))){
      setNumber("")
    }else{
      setNumber(parseInt(value))
    }
  }

  const handleChangeBinToDec = (value) => {
    const binaryRegex = /^[01]+$/
    if(binaryRegex.test(parseInt(value))){
      setNumber(parseInt(value, 2))
    }else{
      setNumber("")
    }
  }

  return (
    <main>
      <BaseNumberInput
        number={number}
        onChangeBase={handleChangeDecToBin}
      />
      <BaseNumberInput
        number={number.toString(2)}
        onChangeBase={handleChangeBinToDec}
      />
    </main>
  );
}

export default App;
