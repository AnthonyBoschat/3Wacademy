import React from 'react';
import Profil from "./Profil"
import {Provider} from "react-redux"
import store from '../Redux/store';

function App() {
  return (
    <Provider store={store}>
      <main>
        <Profil/>
      </main>
    </Provider>
    
  );
}

export default App;
