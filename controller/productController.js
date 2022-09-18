const { Product, Brand } = require("../models/productModel");

const getAllProducts = async (req, res) => {
  try {
    const sort = req.query.sort || null;
    const brand = req.query.brand || null;
    // const brandParams = req.query.brand ? {} : {brand: req.query.brand}; 
    const page = req.query.page || 1;
    const size = 12;
    let products = [];
    console.log(brand);
    if (sort === "priceAsc") {
      products = await Product.find({}).sort({ priceDiscount: 1 }).skip((page - 1) * size).limit(size);
    }
    else if (sort === "priceDesc") {
      products = await Product.find({}).sort({ priceDiscount: -1 }).skip((page - 1) * size).limit(size);
    }
    else if (sort === "title") {
      products = await Product.find({}).sort({ title: 1 }).skip((page - 1) * size).limit(size);
    }
    else {
      products = await Product.find({}).skip((page - 1) * size).limit(size);
    }
    // console.log(products);
    res.json(products);
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};

const getAllBrands = async (req, res) => {
  try {
    const brands = await Brand.find({});
    res.json(brands);
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
}

module.exports = { getAllProducts, getProductById, getAllBrands };
