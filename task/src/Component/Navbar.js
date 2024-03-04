import React from "react";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
const Navbar = () => {
  return (
    <div className="container" >
      <h1 className="text-center  my-4 text-primary">Project Management</h1>
      <p className="text-center lead">Currently 0 task(s) pending</p>
    </div>
  );
};

export default Navbar;
