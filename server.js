require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
// const { getAllProducts } = require("./controller/productController");
// const User = require("./models/userModel");

const app = express();
// middleware
app.use(express.json());
app.use(cors());

app.use("/api/products", productRoutes);
app.use("/api", userRoutes);

const PORT = process.env.PORT || 5500;

app.listen(PORT, async () => {
  try {
    await connectDB();
  } catch (error) {
    console.log(error.message);
  }
  console.log(`Server running on port ${PORT}`);
});
