const express = require("express");
const router = express.Router();
const productModel = require("../models/product");

//enpoints to create a product using promises
router.post("/create", async (req, res) => {
  const product = req.body;
  
  try {
    if (typeof product.tags === 'string') {
      product.tags = product.tags.split(',');
    }
    const data = await productModel.create(product);
    console.log(data);
    res.status(201).send({ success: true, message: "Product Created Successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ success: false, message: "Product Not Created Unsuccessful" });
  }
});

router.put("/update/:product_id", async (req, res) => {
  const product_id = req.params.product_id;
  const product = req.body;

  try {
    const info = await productModel.updateOne({ _id: product_id }, product);
    res.send({ success: true, message: "Product Updated Successfully" });
  } catch (err) {
    console.log(err, "Product Not Updated");
    res.send({success: false, message: "Product Is Not Updated Successfully" });
  }
});

///endpoint to read,get all products
router.get("/", async (req, res) => {
  try {
    let products = await productModel.find().populate('category');
    res.send({ success: true, products });
  } catch (err) {
    console.log(err, "err in reading product");
    res.send({ success: false, message: "Error in reading products" });
  }
});

///endpoint to read,get single products
router.get("/:product_id", async (req, res) => {
  const product_id = req.params.product_id;
  try {
    let products = await productModel.findById(product_id);
    res.send({ success: true, products });
  } catch (err) {
    console.log(err, "err in reading product");
    res.send({ success: false, message: "Error in reading products" });
  }
});

// endpoint to delete product by id
router.delete("/delete/:product_id", async (req, res) => {
  const product_id = req.params.product_id;

  try {
    const info = await productModel.findByIdAndDelete(product_id);
    res.send({ success: true, message: "Product Deleted Successfully" });
  } catch (err) {
    console.log(err, "Product Not Deleted");
    res.send({success: false, message: "Product Is Not Getting Deleted" });
  }
});

module.exports = router;
