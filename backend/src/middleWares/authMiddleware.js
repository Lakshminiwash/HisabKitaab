import jwt from "jsonwebtoken"
import { config } from "../configs/config";
import userModel from "../models/userModel";


export const authenticateUser = async (req,res,next)=>{
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message:"unauthorized"
        })
    }

    try {
        const decoded = jwt.verify(token,config.JWT_SECRET)
        const user = await userModel.findById(decoded.id)

        if(!user){
            return res.status(401).json({message:"unauthorized"})
        }
        
        req.user = user
        next()
    } catch (error) {
        console.log(error)
        return res.status(401).json({message:"unauthorized"})
    }
}