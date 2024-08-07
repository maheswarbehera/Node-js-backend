import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN, // restrict access to specified domain
    credentials: true // allow requests with cookies
}));

app.use(express.json({limit:"10kb"})); 
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true, limit: "10kb"})); 
app.use(express.static("public"));
app.use(cookieParser());

// routes import 
import userRouter from "./routes/user.routes.js"

// routes declaration
app.use("/api/v1/users", userRouter)

// http://localhost:5500/api/v1/users/register

app.get("/api/v1/",(req, res) => {
    // res.status(200).json({
    //     message : "Welcome to the Backend Server"
    // })
    res.json(`Welcome to the Backend, Server running on http://localhost:${process.env.PORT}/api/v1/`)
})

export {app}