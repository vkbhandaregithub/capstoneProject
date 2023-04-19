import React from "react";
import {  Outlet } from "react-router-dom";
import "./UserDashboard.css";
import UserNav from "./UserNav";
import Carousel from "./Carousel";
import ViewDish from "./ViewDish";

const UserDashboard = () => {
  return (
    <>
      <UserNav/>
      <Carousel/>
      <ViewDish/>
      <div className="userBody">
        <Outlet />
      </div>
    </>
  );
};

export default UserDashboard;
