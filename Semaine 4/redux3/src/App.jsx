import Form from "./Components/Form";
import Result from "./Components/Result";
import {Provider} from "react-redux"
import { denominationStore } from "./Store";

function App() {
  return (
    <Provider store={denominationStore}>
      <main>
        <Form/>
        <Result/>
      </main>
    </Provider>
    
  );
}

export default App;
