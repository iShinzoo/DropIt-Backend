<<<<<<< HEAD
import { Router } from "express";
const router = Router();
import { register, login, getUser } from "../controller/authController";
import auth from "../middleware/auth";
=======
const express = require("express");
const router = express.Router();
const { register, login, getUser } = require("../controller/authController");
// const auth = require("../middleware/auth");

const auth = require("../../../middleware/auth");
>>>>>>> f4527ab58b12de8fa288577fefc8d991a851d3e7

router.post("/register", register);
router.post("/login", login);
router.get("/user", auth, getUser);

export default router;
