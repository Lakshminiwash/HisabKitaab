import { Router } from "express";
const router = Router();

// for create new account 
// api/auth/register 
router.post("/register",)

// for login 
// api/auth/login
router.post("/login",)

// for fetch current logged in user (protected route)
// api/auth/getMe 
router.get("/getMe",)

// for update user profile 
// api/auth/updateProfile 
router.patch("/updateProfile",)

export default router