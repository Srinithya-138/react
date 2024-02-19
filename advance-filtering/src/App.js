import Navigation from "./Navigation/Nav";
import Recommended from "./Recommended/Recommended";
import Products from "./products/Products";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap';
function App() {
  return <div>
    <Navigation/>
    <Products/>
    <Recommended/>
  </div>;
}

export default App;
