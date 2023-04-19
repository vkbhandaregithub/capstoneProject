import React, { useState } from "react";
import path from "../../../paths.json";
import "./UserLogin.css";
import { useNavigate } from "react-router-dom";
const UserLogin = () => {
  let [message, setMessage] = useState(null);
  let navigate = useNavigate();

  let userCredentials = {};

  function readValue(property, value) {
    userCredentials[property] = value;
    // console.log(property);
  }

  function login() {
    fetch(path.BASE_URL + path.USER_LOGIN, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userCredentials),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === true) {
          navigate("/userdashboard");
        } else {
          setMessage({ msg: data.message, msgclass: "errmsg" });
          setTimeout(() => {
            setMessage(null);
          }, 3000);
        }
      })
      .catch((err) => console.log(err, "errrr in admin fetch"));
  }

  function handleSignupClick() {
    navigate("/usersignup");
  }

  return (
    <div className="admin_container">
      <div className="admin_login">
        <h2>User Login</h2>
        <input
          type="text"
          placeholder="Enter root@gmail.com"
          className="form-control"
          onChange={(e) => {
            readValue("email", e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Enter 'root' as Password"
          className="form-control"
          onChange={(e) => {
            readValue("password", e.target.value);
          }}
        />
        <div className="button_continer">
          <button className="btn btn_login py-1 px-2" onClick={login}>
            Login
          </button>
          <button className="btn btn_signup p-1 px-2" onClick={handleSignupClick}>
            Signup
          </button>
        </div>
        {message != null ? (
          <div className={`message ${message.msgclass}`}>
              {message.msg}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default UserLogin;
