//require('dotenv').config({ path: './env' });
import dotenv from "dotenv"
import connectDb from "./db/index.js";
import { app } from "./app.js";

dotenv.config({path: './.env'})

connectDb()
.then(() => {
    app.listen(process.env.PORT || 8080, () => {
        console.log(`⚙️  Server is running on http://localhost:${process.env.PORT}/api/v1/`)
    })
})
.catch((err) => {
    app.on("error", (error) => {
        console.log(error); 
    })
})

/*

import mongoose from "mongoose";
import {DB_NAME} from "./constants";
import express from "express";
const app = express()
( async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log(error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`Serve running on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.log(error);
        throw err
    }
}) ()

*/