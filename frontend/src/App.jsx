import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./components/Admin/AdminLogin";
import AdminDashboard from "./components/Admin/AdminDashboard";
import CreateProduct from "./components/Admin/Products/CreateProduct/CreateProduct";
import ViewProduct from "./components/Admin/Products/ViewProduct/ViewProduct";
import ViewRestaurants from "./components/Admin/AdminRestaurant/ViewRestaurants";
// import UserNavbar from "./components/User/UserNavbar";
import Landing from "./components/Landing";

import CreateRestaurant from "./components/Admin/AdminRestaurant/CreateRestaurant";
import UserRegistration from "./components/User/registration/UserRegistration";
import UserLogin from "./components/User/login/UserLogin";
import UserDashboard from "./components/User/UserDashboard";
import Home from "./components/User/Home";
import DishCard from "./components/User/DishCard";
import ViewDish from "./components/User/ViewDish";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/usersignup" element={<UserRegistration />} />
          <Route path="/userdashboard/home" element={<Home/>}/>

          <Route path="/admindashboard" element={<AdminDashboard />}>
            <Route
              path="/admindashboard/createproduct"
              element={<CreateProduct />}
            />
            <Route
              path="/admindashboard/viewproduct"
              element={<ViewProduct />}
            />
            <Route
              path="/admindashboard/createrestaurant"
              element={<CreateRestaurant />}
            />
            <Route
              path="/admindashboard/viewrestaurant"
              element={<ViewRestaurants />}
            />
            <Route
              path="/admindashboard/usersignup"
              element={<UserRegistration />}
            />
          </Route>

          {/* user routes */}
          <Route path="/userdashboard/" element={<UserDashboard />}>
            <Route
              path="/userdashboard/home"
              element={<Home/>}
            />
            {/* <Route
              path="/usersignup"
              element={<UserRegistration />}
            />
            <Route
              path="/userlogin"
              element={<UserLogin />}
            /> */}
            <Route
              path="/userdashboard/card"
              element={<DishCard />}
            />
            <Route
              path="/userdashboard/dishes"
              element={<ViewDish />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
