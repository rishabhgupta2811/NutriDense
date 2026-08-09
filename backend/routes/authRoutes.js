const express = require("express");

const {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
} = require("../controllers/authController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Register User
router.post("/register", registerUser);

// Login User
router.post("/login", loginUser);

// Get Logged In User Profile
router.get("/profile", protect, getUserProfile);

//update user profile
router.put("/profile", protect, updateUserProfile);

module.exports = router;