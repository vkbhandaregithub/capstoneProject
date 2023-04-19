// import React,{useEffect, useState} from "react";
// import RestaurantNavbar from "./RestaurantNavbar";
// // import { FaEye, FaCheckCircle, FaBan } from "react-icons/fa";
// // import path from "../../../paths.json";


// const ViewRestaurants = () => {

//   let [restaurants,setRestaurants]= useState([]);

//   // endpoint to get all restaurant
//   useEffect(()=>{
//     fetch("http://localhost:8000/restaurant/")
//     .then((res)=>{
//         return res.json();
//     })
//     .then((response)=>{
        
//         if(response.success===true){
//             // console.log("success rest");
//             // console.log(response.restaurants); // log the restaurants data
//             setRestaurants(response.restaurants); //restaurant is  from backend restaurant.js line no 174
//         } else {
//             console.log("Failed to fetch restaurants:", response.error); // log any errors
//         }

//     })
//     .catch((err)=>{
//         console.log("Error fetching restaurants:", err); // log any errors
//     })
//   },[])

//   // console.log("Restaurants:", restaurants); // log the restaurants state
 
//   return (
//     <>
//     <RestaurantNavbar/>
//       <div className="mainContainer">
//         <div className="title">
//           <h2>View All Restaurants</h2>
//         </div>
//         <table className="table table-bordered text-center table-striped table-hover">
//           <thead>
//             <tr>
//               <th className="th">#</th>
//               <th className="th">Restaurant Name</th>
//               <th className="th">Contact</th>
//               <th className="th">Address</th>
//               <th className="th">Pincode</th>
//             </tr>
//           </thead>
//           <tbody>
//             {restaurants.map((restaurant, index) => {
//               return (
//                 <tr key={index}>
//                   <td>{index + 1}</td>
//                   <td>{restaurant.name}</td>
//                   <td>{restaurant.contact}</td>
//                   <td>{restaurant.restaurantaddress}</td>
//                   <td>{restaurant.pincode}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default ViewRestaurants;


import React, { useState, useEffect } from "react";
import RestaurantNavbar from "./RestaurantNavbar";

const ViewRestaurant = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/restaurant")
      .then((response) => response.json())
      .then((data) => {
        setRestaurants(data.restaurants);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <>
      <RestaurantNavbar />
      <div className="mainContainer">
        <div className="title">
          <h2>View Restaurants</h2>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Contact</th>
              <th scope="col">Pincode</th>
            </tr>
          </thead>
          <tbody>
            {restaurants.map((restaurant) => (
              <tr key={restaurant._id}>
                <td>{restaurant.name}</td>
                <td>{restaurant.restaurantaddress}</td>
                <td>{restaurant.contact}</td>
                <td>{restaurant.pincode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewRestaurant;
