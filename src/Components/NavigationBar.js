import React from "react";
import { Link } from "react-router-dom";
const NavigationBar = () => {
  return (
    <>
      <div className="navbar">
        <Link to={"/"} className="btn btn-warning mb-3">
          Student List
        </Link>
        <Link to={"/create"} className="btn btn-warning">
          create
        </Link>
      </div>
    </>
  );
};

export default NavigationBar;
