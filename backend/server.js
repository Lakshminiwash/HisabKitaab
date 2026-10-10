import app from "./src/app.js"
import dotenv from "dotenv"
import connectToDB from "./src/configs/db.js"

dotenv.config()

const PORT = process.env.PORT

const startServer = async ()=>{
    try {
        await connectToDB()
        app.listen(PORT,()=>{
            console.log(`server is running on port ${PORT}`);
        })
    } catch (error) {
        console.log("failed to start the message", error.message)
        process.exit(1)
    }
}

startServer()