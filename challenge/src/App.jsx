import { useState } from "react";
import {BrowserRouter as Routeur, Route, Link, Routes} from "react-router-dom"
import Authentication from "./Components/Authentication";
import "./Css/main.css"


function App() {

  const [logged, setLogged] = useState(false)
  

  return (
    <Routeur>
      <main>
        <Authentication/>
      </main>
    </Routeur>
  );
}

export default App;
