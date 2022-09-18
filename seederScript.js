require("dotenv").config();

const {products, brands} = require("./data/Products");
const connectDB = require("./config/db");
const {Product, Brand} = require("./models/productModel");

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany();
    await Brand.deleteMany({});

    await Product.insertMany(products);
    await Brand.insertMany(brands);

    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();
