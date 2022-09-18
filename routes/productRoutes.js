const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  getAllBrands,
} = require("../controller/productController");

// @desc    GET all products from db
// @route   GET /api/products
// @access  Public
router.get("/", getAllProducts);

// @desc    GET all products by id from db
// @route   GET /api/products/;id
// @access  Public
router.get("/product/:id", getProductById);

router.get("/brands", getAllBrands);

module.exports = router;
