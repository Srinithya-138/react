import "./App.css";
import Navbar from "./components/Navbar";
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import About from "./pages/about";
import Contact from "./pages/Contact";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/menu" exact element={<Menu/>}/>
          <Route path="/about" exact element={<About/>}/>
          <Route path="/contact" exact element={<Contact/>}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
