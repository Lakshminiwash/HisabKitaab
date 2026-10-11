import { Router } from "express";
import {registerSchema, validateAuth } from "../validators/authValidator.js"
import { authenticateUser } from "../middleWares/authMiddleware.js";
const router = Router();

// for create new account 
// api/auth/register 
router.post("/register",validateAuth(registerSchema),)

// for login 
// api/auth/login
router.post("/login",)

// for fetch current logged in user (protected route)
// api/auth/getMe 
router.get("/getMe",authenticateUser,)

// for update user profile 
// api/auth/updateProfile 
router.patch("/updateProfile",)

export default router