const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    address: [{ type: Object }],
    orders: [{ type: Object }],
    cartItems: [{ type: Object }],
  },
  {
    collection: "users",
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
