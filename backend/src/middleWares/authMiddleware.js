import jwt from "jsonwebtoken"
import { config } from "../configs/config.js";
import userModel from "../models/userModel.js";
import tokenBlackListModel from "../models/tokenBlacklistModel.js";


export const authenticateUser = async (req, res, next) => {
    const token = req.cookies?.token;

    if (!token) {
        return res.status(401).json({
            message: "unauthorized"
        })
    }

    const isBlacklisted = await tokenBlackListModel.findOne({ token });
    if (isBlacklisted) {
        return res.status(401).json({ success: false, message: 'Token has been invalidated. Please log in again.' });
    }

    try {
        const decoded = jwt.verify(token, config.JWT_SECRET)
        const user = await userModel.findById(decoded.id)

        if (!user) {
            return res.status(401).json({ message: "unauthorized" })
        }

        req.user = user
        next()
    } catch (error) {
        return res.status(401).json({ message: "unauthorized" })
    }
}