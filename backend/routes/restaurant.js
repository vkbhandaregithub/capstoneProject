const express = require("express");
const router = express.Router();
const Restaurant = require("../models/restaurant");

// add a new restaurant
router.post("/create", (req, res) => {
  const newRestaurant = new Restaurant({
    ...req.body,
  });

  newRestaurant
    .save()
    .then(() => {
      res.json({ success: true, message: "Restaurant added successfully" });
    })
    .catch((err) => {
      res.status(500).json({ success: false, error: err });
    });
});

// get all restaurants
router.get("/", (req, res) => {
  Restaurant.find()
    .then((restaurants) => {
      res.json({ success: true, restaurants });
    })
    .catch((err) => {
      res.status(500).json({ success: false, error: err });
    });
});

module.exports = router;
