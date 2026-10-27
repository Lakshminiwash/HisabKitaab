import { Router } from "express";
import {loginSchema, registerSchema, updateSchema, validateAuth } from "../validators/authValidator.js"
import { authenticateUser } from "../middleWares/authMiddleware.js";
import { getMe, Login, logOut, Register, UpdateProfile } from "../controllers/authController.js";
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
router.patch("/updateProfile",authenticateUser,validateAuth(updateSchema),UpdateProfile)

// for logout 
// api/auth/logout 
router.post("/logOut",authenticateUser,logOut)

export default router