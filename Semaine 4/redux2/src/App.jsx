import {Provider} from "react-redux"
import { dragonStore } from "./Store";
import Form from "./Components/Form";
import List from "./Components/List";


function App() {

  
  return (
    <Provider store={dragonStore}>
      <main>
        <Form/>
        <List/>
      </main>
    </Provider>
  );
}

export default App;
