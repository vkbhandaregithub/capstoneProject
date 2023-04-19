import React, { useRef, useState } from "react";
import path from "../../../paths.json";
import { useNavigate } from "react-router-dom";

const UserRegistration = () => {
  let [message, setMessage] = useState(null);
  let navigate = useNavigate();
  let restaurant = useRef({});

  function readValue(property, value) {
    restaurant.current[property] = value;
  }

  function login(){
    navigate('/userlogin')
  }

  function register() {
    fetch(path.BASE_URL + path.USER_REGISTRATION, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(restaurant.current),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === true) {
          navigate('/userlogin');
          setMessage({
            msg: "Registration Successfull",
            msgclass: "success_msg",
          });
        } else {
          setMessage({ msg: data.message, msgclass: "errmsg" });
        }
        setTimeout(() => {
          setMessage(null);
        }, 2000);
      })
      .catch((err) => {
        console.log(err, "errrr in admin fetch");
        setMessage({
          msg: "An error occurred. Please try again later.",
          msgclass: "errmsg"
        });
        setTimeout(() => {
          setMessage(null);
        }, 2000);
      });
  }

  return (
    <div className="admin_container">
      <div className="admin_login">
        <h2>User Registration</h2>
        <input
          type="text"
          placeholder="Enter Your Name"
          className="form-control"
          onChange={(e) => {
            readValue("name", e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Your Email"
          className="form-control"
          onChange={(e) => {
            readValue("email", e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          className="form-control"
          onChange={(e) => {
            readValue("password", e.target.value);
          }}
        />

        <div className="button_continer">
          <button className="btn btn_login py-1 px-3" onClick={register}>
            Register
          </button>
          <button className="btn btn_signup py-1 px-3" onClick={login}>Sign in</button>
        </div>

        {message && (
          <div className={`popup ${message.msgclass}`}>
            <p>{message.msg}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserRegistration;
