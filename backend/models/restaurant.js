const mongoose = require("mongoose");
const restaurantSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    restaurantaddress: {
      type: String,
      required: true,
      maxLength: 100,
    },
    
    contact: {
      type: String,
      required: true,
    },
    pincode: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const restaurantModel = mongoose.model("restaurants", restaurantSchema);
module.exports = restaurantModel;
