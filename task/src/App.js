import Navbar from "./Component/Navbar";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import AddTask from "./Component/AddTask";
// import Container from "./../node_modules/react-bootstrap/esm/Container";
function App() {
  return (
    <Container>
      <Navbar />
      <AddTask />
    </Container>
  );
}

export default App;
