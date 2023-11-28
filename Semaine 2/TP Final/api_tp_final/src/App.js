import Title from "./Component/Title";
import Select from "./Component/Select";
import Show from "./Component/Show";
import "./Style/main.css";
import { SelectValueProvider } from "./Context/SelectValueContext";

function App() {
  
  // Le provider englobe mes composant qui ont besoin de s'échanger des valeurs de variables
  return (
    <main>
      <SelectValueProvider>
        <Title />
        <Select />
        <Show />
      </SelectValueProvider>
    </main>
  );
}

export default App;
