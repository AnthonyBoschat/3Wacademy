import { useEffect, useState } from "react";
import {BrowserRouter as Routeur, Route, Link, Routes} from "react-router-dom"
import Authentication from "./Components/Authentication";
import Inscription from "./Components/Inscription";
import CodeGiver from "./Components/CodeGiver";
import "./Css/main.css"
import {Provider, useSelector} from "react-redux"
import store from "./Redux/Store";
import Accueil from "./Components/Accueil";


function App() {


  return (
    <Provider store={store}>
      <Routeur>
        <main>
          <Routes>
            <Route path="/" element={<Authentication />}/>
            <Route path="inscription" element={<Inscription />}/>
            <Route path="codeGiver" element={<CodeGiver />}/>
            <Route path="accueil" element={<Accueil />}/>
          </Routes>
        </main>
      </Routeur>
    </Provider>
    
  );
}

export default App;
