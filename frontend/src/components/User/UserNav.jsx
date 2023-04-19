import React from "react";
import { Link } from "react-router-dom";
const UserNav = () => {
  return (
    <>
      <nav
        className="w-100 navbar navbar-expand-lg navbar-light  bg-light px-5"
        style={{ position: "fixed", zIndex: "111" }}
      >
        <Link
          className="navbar-brand me-5 text-dark container text-uppercase"
          to="#"
        >
          Khana Khanjana
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/userdashboard/home">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/userdashboard/dishes">
                Dishes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/userlogin">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/usersignup">
                SignUp
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default UserNav;
