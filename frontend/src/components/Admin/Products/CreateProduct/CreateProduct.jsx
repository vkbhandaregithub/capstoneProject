import React, { useRef, useEffect, useState } from "react";
import "./CreateProduct.css";
import ProductNavbar from "../ProductNavbar/ProductNavbar";
import path from "../../../../paths.json";

const CreateProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    images: "",
    tags: "",
    category: "",
  });
  const [categories, setCategories] = useState([]);
  const createForm = useRef();
  const [showPopup, setShowPopup] = useState(false); // State variable for popup visibility

  useEffect(() => {
    fetch(path.BASE_URL + path.FETCH_CATEGORIES)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.success === true) {
          setCategories(data.categories);
        }
      })
      .catch((err) => {
        console.log(err, "errorr");
      });
  }, []);

  function readValue(property, value) {
    setProduct({
      ...product,
      [property]: value,
    });
  }

  function create() {
    fetch(path.BASE_URL+path.CREATE_PRODUCT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success === true) {
          setShowPopup(true); // Show popup if product added successfully
          setTimeout(() => {
            setShowPopup(false); // Hide popup after 3 seconds
          }, 3000);
        }
      })
      .catch((err) => {
        console.log(err, "err in product creation");
      });
  }

  return (
    <>
      <ProductNavbar />
      <div className="mainContainer">
        <div className="title">
          <h2>Add New Product</h2>
        </div>
        <form ref={createForm} className="formContainer">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Product Name"
            onChange={(e) => {
              readValue("name", e.target.value);
            }}
          />

          <input
            type="number"
            className="form-control"
            placeholder="Enter Product Price"
            onChange={(e) => {
              readValue("price", e.target.value);
            }}
          />

          <input
            type="text"
            className="form-control"
            placeholder="Enter Product Description"
            onChange={(e) => {
              readValue("description", e.target.value);
            }}
          />

          <input
            type="text"
            className="form-control"
            placeholder="Enter Image URL"
            onChange={(e) => {
              readValue("images", e.target.value);
            }}
          />

          <input
            type="text"
            className="form-control"
            placeholder="Enter Product Tags"
            onChange={(e) => {
              readValue("tags", e.target.value);
            }}
          />

          <select
            onChange={(e) => {
              readValue("category", e.target.value);
            }}
            className="form-control"
          >
            <option value="">Select Category</option>
            {
              categories.map((category,i)=>{
                return(
                  <option key={i} value={category._id}>{category.name}</option>
                )
              })
            }
          </select>
        </form>
        <button
          className="btn btn-success align-self-start mt-3"
          onClick={create}
        >
          Add Product
        </button>
      </div>
      {showPopup && (
        <div className="popupContainer py-2 px-5 bg-success text-white">
          <div className="popup">Product added successfully!</div>
        </div>
      )}
    </>
  );
};

export default CreateProduct;
