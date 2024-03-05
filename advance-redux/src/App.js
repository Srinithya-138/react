import Navbar from "./component/Navbar";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap';
import AddTask from "./component/AddTask";
import TaskList from "./component/taskList";

function App() {
  return (
    <div>
      
      <Navbar/>
      <AddTask/>
      <TaskList/>

    </div>
  );
}

export default App;
