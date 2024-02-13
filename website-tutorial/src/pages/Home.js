import React from "react";
import { Link } from "react-router-dom";
import pizzaLogo from '../assets/pizza.jpeg'
import "../styles/home.css"

const Home = () => {
  return (
    <div className="home " style={{backgroundImage:`url(${pizzaLogo})`}}>
      <div className="headerContainer">
        <h1>Pedro's Pizzeria</h1>
        <p>PIZZA TO FIT ANY TASTE</p>
        <Link to="/menu">
          <button>ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
