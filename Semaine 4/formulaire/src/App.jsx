import { useState } from "react";
import {Link, Route, Routes, BrowserRouter as Routeur} from "react-router-dom"
import "./Style/Main.css"
import useDice from "./Reducer";
import { useEffect } from "react";

function App() {

  const {ACTIONS_DICES, dispatchDice, rollTheDice, diceState, analysBrelan} = useDice()


  const generateResult = (diceRoll) => {
    const rollAnalyse = analysBrelan(diceRoll)
    const style = rollAnalyse === true ? {color:"red"} : {color:"black"}
    return(
      <div key={Date.now()} style={style}>{diceRoll}</div>
    )
    
  }

  return(
    <Routeur>
      <header>
        <div>Jeu</div>
        <div>Description</div>
        <div>Statistique</div>
      </header>

      <p>
        Nombre de brelan : {diceState.brelan}
      </p>
      
      <div>
        <div>
          <input onClick={() => rollTheDice()} type="button" value="Lancer 3 dés" required />
        </div>
        <div>
          <label htmlFor="selectOption">Nombre de lancer de dés :</label>
          <select onChange={(e) => dispatchDice({type:ACTIONS_DICES.UPDATE_REPETITION, payload:parseInt(e.target.value)})} name="selectOption" id="selectOption">
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="500">500</option>
            <option value="1000">1000</option>
          </select>
        </div>
      </div>
      <div>
        {diceState.diceMemory.map(diceRoll => generateResult(diceRoll))}
      </div>

      
      
      {/*<Routes>
        <Route path="/" />
        <Route path="Description"/>
        <Route path="Statistique"/>
        </Routes>*/}
    </Routeur>
  )
}

export default App;
