const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const path = require("path")
const fs = require("fs")

const app = express()

const clientUrl = process.env.CLIENT_URL || "http://localhost:5173"
const frontendDistPath = path.join(__dirname, "../Frontend/dist")

app.use(express.json())
app.use(cookieParser())

const corsOptions = {
    origin: clientUrl,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}

app.use(cors(corsOptions))
app.options("*", cors(corsOptions))

/* require all routes*/
const authRouter = require("./routes/auth.routes")
const interviewRouter = require("./routes/interview.routes")


/* using routes */
app.use("/api/auth", authRouter)
app.use("/api/interview", interviewRouter)



module.exports = app