import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../src/components/Header"
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap';
// import Footer from "../src/components/Footer"
// import About from '../src/pages/About'
// import Home from '../src/pages/Home'
// import Menu from '../src/pages/Menu'
// import Contact from '../src/pages/Contact'


import './App.css';

function App() {
  return (
    <div>
      <Header/>
      {/* <Footer/> */}

    </div>
  );
}

export default App;
