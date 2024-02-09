import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home mt-5">
      <div className=" headerContainer mt-5">
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
