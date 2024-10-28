import { Router } from "express";
const router = Router();
import { register, login, getUser } from "../controller/authController";
import auth from "../middleware/auth";

router.post("/register", register);
router.post("/login", login);
router.get("/user", auth, getUser);

export default router;
