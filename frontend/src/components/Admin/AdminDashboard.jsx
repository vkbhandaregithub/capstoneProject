import React from "react";
import "./AdminDashboard.css";
import { Link, Outlet } from "react-router-dom";
// import CreateProduct from "./Products/CreateProduct/CreateProduct";

const AdminDashboard = () => {
  return (
    <div className="adminDashboadContainer">
      <div className="adminDashboardHeader">
        <div className="adminLogo">
          <h2 className="logo-title">Admin Panel</h2>
        </div>
      </div>
      <div className="adminContentContainer">
        <div className="adminSidebar">
          <div className="adminMenuContainer">
            <Link to={"/admindashboard/createproduct"}>
              <div className="adminMenuItem text-dark">Product</div>
            </Link>
            <Link to={"/admindashboard/createrestaurant"}>
              <div className="adminMenuItem text-black">Restaurant</div>
            </Link>
           
            <Link to={"/admindashboard/usersignup"}>
              <div className="adminMenuItem text-black">User</div>
            </Link>
          </div>
        </div>
        <div className="adminMainContentContainer">
          <Outlet />
          {/* <CreateProduct/> */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
