import "./App.css";
import CustomerAdd from "./Component/CustomerAdd";
import { Provider } from "react";
import { store } from "./store/store";
import CustomerView from "./Component/CustomerView";
function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        <h1>React Redux Customer Example</h1>
        <CustomerAdd />
        <CustomerView/>
      </div>
    </Provider>
  );
}

export default App;
