import express from "express"
import cookieParser from "cookie-parser"
import authRouter from "./routes/authRoutes.js"
import chatRouter from "./routes/chatRoutes.js"
import expenseRouter from "./routes/expenseRoutes.js"
import groupRouter from "./routes/groupRoutes.js"
import errorHandler from "./middleWares/globalErrorHandler.js"
import cors from 'cors'

const app = express()

app.use(cors({
    origin: "http://localhost:5173", // Aapke React frontend ka URL (Vite ka default port 5173 hota hai, apne hisab se change kar lena)
    credentials: true,              // Cookies/Authorization headers allow karne ke liye
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth/", authRouter)
app.use("/api/chat/", chatRouter)
app.use("/api/expense/", expenseRouter)
app.use("/api/group/", groupRouter)

app.use(errorHandler)

export default app