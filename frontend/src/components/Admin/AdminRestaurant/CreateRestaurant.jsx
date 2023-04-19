import React, { useState } from "react";
import RestaurantNavbar from "./RestaurantNavbar";

const CreateRestaurant = () => {
  const [restaurant, setRestaurant] = useState({
    name: "",
    restaurantaddress: "",
    contact: "",
    pincode: "",
  });
  const [message, setMessage] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRestaurant((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:8000/restaurant/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(restaurant),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRestaurant({
          name: "",
          restaurantaddress: "",
          contact: "",
          pincode: "",
        });
        setMessage({ text: "Restaurant created successfully", color: "green" });
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage({ text: "Restaurant creation failed", color: "red" });
      })
      .finally(() => {
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      });
  };

  return (
    <>
      <RestaurantNavbar />
      <div className="mainContainer">
        <div className="title">
          <h2>Add New Restaurant</h2>
        </div>
        <form className="formContainer" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={restaurant.name}
            className="form-control"
            placeholder="Enter Restaurant Name"
            onChange={handleChange}
          />

          <input
            type="text"
            name="restaurantaddress"
            value={restaurant.restaurantaddress}
            className="form-control"
            placeholder="Enter Restaurant Address"
            onChange={handleChange}
          />

          <input
            type="text"
            name="contact"
            value={restaurant.contact}
            className="form-control"
            placeholder="Enter Restaurant Contact"
            onChange={handleChange}
          />

          <input
            type="text"
            name="pincode"
            value={restaurant.pincode}
            className="form-control"
            placeholder="Enter Restaurant Pincode"
            onChange={handleChange}
          />

          <button
            type="submit"
            className="btn btn-success align-self-start mt-3"
          >
            Add Restaurant
          </button>
        </form>
        {message && (
          <div
            className={`alert alert-${message.color} mt-3 w-100 bg-success p-2 text-white`}
            style={{ width: "100%", textAlign: "center" }}
          >
            {message.text}
          </div>
        )}
      </div>
    </>
  );
};

export default CreateRestaurant;
