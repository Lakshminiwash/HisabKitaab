import app from "./src/app.js"
import { config } from "./src/configs/config.js"
import connectToDB from "./src/configs/db.js"


const PORT = config.PORT

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