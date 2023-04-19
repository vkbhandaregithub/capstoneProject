import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import UserLogin from "./User/login/UserLogin";
const Landing = () => {
  return (
    <>
      <div className="headerContainer">
      <div className="header">
        <div className="logo">
          <h2 className="text-white">Hotel</h2>
        </div>
        <nav>
          <ul className="navlist mt-3 gap-5 text-white">
            <Link to={"/userlogin"}>
              <li>Customer</li>
            </Link>
            <Link to={"/adminlogin"}>
              <li>Admin</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  
    <UserLogin/>
    </>

    
  );
};

export default Landing;
