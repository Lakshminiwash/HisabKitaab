import dotenv from "dotenv"
dotenv.config()

if(!process.env.PORT){
    throw new Error("PORT is not defined in the environment variable");
}
if(!process.env.MONGO_URI){
    throw new Error("MONGO_URI is not defined in the environment variable");
}

if(!process.env.JWT_SECRET){
    throw new Error("jwt secret is not define")
}
if(!process.env.NODE_ENV){
    throw new Error("NODE env is not define")
}

export const config = {
    PORT:process.env.PORT,
    MONGO_URI:process.env.MONGO_URI,
    JWT_SECRET:process.env.JWT_SECRET,
    NODE_ENV:process.env.NODE_ENV
}