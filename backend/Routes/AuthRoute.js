const express = require("express");
const router = express.Router();

const {
  register,
  login,
  logout,
  verifyUser,
} = require("../controllers/AuthController");

const protect = require("../middlewares/AuthMiddleware");

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

router.get("/verify", protect, verifyUser);

module.exports = router;