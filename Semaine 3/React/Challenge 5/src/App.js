import React, { useState } from 'react';
import Formulaire from './Components/Formulaire';
import { StateProvider } from './Contexts/Context';
import MessageList from './Components/MessageList';
import "./Styles/MAIN.css"

function App() {

  return(
    <main>
      <StateProvider>
        <Formulaire />
        <MessageList />
      </StateProvider>
    </main>
  )
}

export default App;