import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import About from "./pages/about";
import Contact from "./pages/Contact";
import "./styles/Footer.css"
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap';
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
        <Footer/>
      </Router>
     
    </div>
  );
}

export default App;
