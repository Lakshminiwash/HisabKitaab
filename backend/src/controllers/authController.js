import jwt from "jsonwebtoken"
import { config } from "../configs/config.js"
import userModel from "../models/userModel.js"
import bcrypt from "bcryptjs"

// for token generation 
async function generateToken(user, res, message) {
    const token = jwt.sign(
        { id: user.id },
        config.JWT_SECRET,
        { expiresIn: "7d" }
    )

    res.cookie("token", token, {
        httpOnly: true,
        sameSite: config.NODE_ENV === "production" ? "none" : "lax",
        secure: config.NODE_ENV === "production",
        path: "/",
        maxAge: 7 * 24 * 60 * 60 * 1000
    })

    return res.status(201).json({
        message,
        success: true,
        user: {
            id: user._id,
            email: user.email,
            contact: user.contact,
            userName: user.fullName
        }
    })
}

// Register 
export const Register = async (req, res, next) => {
    try {
        const { userName, email, password, contact } = req.body
        const existingUser = await userModel.findOne({ email })

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "user with this email already already exist"
            })
        }

        const user = await userModel.create({
            userName,
            email,
            password,
            contact
        })

        return generateToken(user, res, "user registered successfully")

    } catch (error) {
        next(error)
    }


}

// Login 
export const Login = async (req, res, next) => {
    try {
        const { email, password } = req.body

        const user = await userModel.findOne({ email }).select("+password");

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "invalid email or password"
            })
        }

        const isPassMatched = await bcrypt.compare(password, user.password)
        if (!isPassMatched) {
            return res.status(400).json({
                success: false,
                message: "invalid email or password"
            })
        }

        return generateToken(user, res, "user logged in successfully")

    } catch (error) {
        next(error)
    }
}

// getMe 
export const getMe = async (req, res, next) => {
    try {
        const userId = req.user.id
        const user = await userModel.findById(userId).select("-password")

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "user not found"
            })
        }

        return res.status(200).json({
            success: true,
            message: "user fetched successfully",
            user
        })
    } catch (error) {
        next(error)
    }
}

export const logOut = async (req, res, next) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            secure: process.env.NODE_ENV === "production",
            path: "/"
        })

        return res.status(200).json({
            success: true,
            message: "Logged out successfully"
        })
    } catch (error) {
        next(error)
    }
}
