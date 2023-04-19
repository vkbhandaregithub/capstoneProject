import React from "react";
// import "./ProductNavbar.css";
import { Link } from "react-router-dom";

const RestaurantNavbar = () => {
  return (
    <div className="optionsNavbar">
      <ul className="nav">
        <Link to={"/admindashboard/createrestaurant"}>
          <li className="nav-link create-btn">Add New Restaurant</li>
        </Link>
        <Link to={"/admindashboard/viewrestaurant"}>
          <li className="nav-link view-btn">View Restaurant</li>
        </Link>
      </ul>
    </div>
  );
};

export default RestaurantNavbar;
