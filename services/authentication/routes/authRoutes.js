const express = require("express");
const router = express.Router();
const { register, login, getUser } = require("../controller/authController");
// const auth = require("../middleware/auth");

const auth = require("../../../middleware/auth");

router.post("/register", register);
router.post("/login", login);
router.get("/user", auth, getUser);

export default router;
