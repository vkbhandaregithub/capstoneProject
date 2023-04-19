import React, { useState, useEffect } from "react";
import axios from "axios";
import DishCard from "./DishCard";
import "./DishCard.css";
import "./ViewDish.css";
import path  from '../../paths.json'
function ViewDish() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(path.BASE_URL+path.VIEW_DISH)
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="products-container mt-5 pt-5 px-5">
      <h1>All Dishes</h1>
      <div className="card-container container d-flex flex-wrap">
        {products.map((product) => (
          <DishCard
            key={product._id}
            name={product.name}
            price={product.price}
            description={product.description}
            images={`${product.images}`}
            // category={product.category.name}
          />
        ))}
      </div>
    </div>
    </>
  );
}

export default ViewDish;
