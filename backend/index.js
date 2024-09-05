import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from './Routes/auth.js';
import userRoute from './Routes/user.js';
import docRoute from './Routes/doctor.js';
import reviewRoute from './Routes/review.js';

dotenv.config()

const app = express()
const port = process.env.PORT || 8000


const corsOption ={
    origin:true
}

//Connect to db
mongoose.set('strictQuery',false)
const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
        })

        console.log("MongoDB database is connected")
    }
    catch{
 console.log('DB connection is failure')
    }
}


//using middle ware
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOption ))

//route the api

app.use('/api/v1/auth',authRoute)
app.use('/api/v1/users',userRoute)
app.use('/api/v1/doctor',docRoute)
app.use('/api/v1/review',reviewRoute)





app.get('/',(req,res)=>{
    res.send("Api is working")
})

app.listen(port,()=>{
    connectDB();
    console.log("server is working on " + port)
})
