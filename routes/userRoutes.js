const express = require("express");
const {
  SignupUser,
  LoginUser,
  DeleteUser,
  TokenValidator,
  UpdateUser,
  GetUserDetails,
} = require("../controller/userController");
const auth = require("../middleware/auth");
const router = express.Router();

// Register User Route
router.post("/signup", SignupUser);

// Login User Route
router.post("/login", LoginUser);

// Get User Details
router.post("/getuser", GetUserDetails);

// Check User
// router.post("/checkuser", CheckUser);

// Update User Route
router.post("/update", UpdateUser);

// Delete User Route
router.delete("/delete", auth, DeleteUser);

// Validation User Route
router.post("/tokenIsValid", TokenValidator);

module.exports = router;
