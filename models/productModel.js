const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    imageUrl: [{ type: String, required: true }],
    title: {
      type: String,
      required: true,
    },
    overview: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    priceDiscount: {
      type: Number,
      required: true,
    },
    countInStock: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    hairTool: [{ type: String }],
    hairCategory: [{ type: String }],
    hairBenefit: [{ type: String }],
    brand: { type: String },
    keyIngredients: [{ type: String }],
  },
  {
    collection: "products",
  }
);

const brandSchema = new mongoose.Schema({
  allBrands: [{ type: String }]
}, {
  collection: "brands"
});

const Brand = mongoose.model("brands", brandSchema);
const Product = mongoose.model("product", productSchema);

module.exports = {Product, Brand};
