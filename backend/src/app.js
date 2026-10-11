import express from "express"
import cookieParser from "cookie-parser"
import authRouter from "./routes/authRoutes.js"
import chatRouter from "./routes/chatRoutes.js"
import expenseRouter from "./routes/expenseRoutes.js"
import groupRouter from "./routes/groupRoutes.js"

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth/",authRouter)
app.use("/api/chat/",chatRouter)
app.use("/api/expense/",expenseRouter)
app.use("/api/group/",groupRouter)

export default app