import React from "react";
import UserNav from "./UserNav";
import Carousel from "./Carousel";


const Home = () => {
  return (
    <>
      <UserNav />
      {/* <div>Home</div> */}
      <div className="carousel-container h-25">
      <Carousel/>
      
      </div>
      
    </>
  );
};

export default Home;
