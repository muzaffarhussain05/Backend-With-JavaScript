import dotenv from "dotenv"
import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";
import connectDB from "./db/index.js";
import express from "express"

const app=express()

dotenv.config({
    path:'./env'
})
connectDB()
.then(() =>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is Running at ${process.env.PORT}`);
    })
    app.on("error",(error) =>{
        console.log("ERR: ",error);
        throw error
    })
})
.catch((err) =>{
    console.log("MONGO db connection failed !!! ",err);
})




