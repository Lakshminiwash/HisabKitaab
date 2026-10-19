import { Router } from "express";
import {loginSchema, registerSchema, validateAuth } from "../validators/authValidator.js"
import { authenticateUser } from "../middleWares/authMiddleware.js";
import { getMe, Login, logOut, Register } from "../controllers/authController.js";
const router = Router();

// for create new account 
// api/auth/register 
router.post("/register",validateAuth(registerSchema),Register)

// for login 
// api/auth/login
router.post("/login",validateAuth(loginSchema),Login)

// for fetch current logged in user (protected route)
// api/auth/getMe 
router.get("/getMe",authenticateUser,getMe)

// for update user profile 
// api/auth/updateProfile 
// router.patch("/updateProfile",)

// for logout 
// api/auth/logout 
router.post("/logout",authenticateUser,logOut)

export default router