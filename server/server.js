require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const verifyToken = require('./middleware/authMiddleware')
const userRoute = require('./routes/userRoute')
const loginRoute = require('./routes/loginRoute')
const registerRoute  = require('./routes/registerRoute')
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;


mongoose.connect(MONGO_URI)
.then(()=> console.log("mongodb connected succesfully..."))
.catch(()=> console.error('mongodb connection error...'))

const app = express()
app.use(express.json())

 app.get('/',(req,res)=>{
    return res.status(200).send("Hello From Server...")
 })

 app.get('/api',(req,res)=>{
    return res.status(200).send({msg:"Hello From Server..."})
 })

 app.use("/api/auth/login",loginRoute)
 app.use("/api/auth/register",registerRoute)
  app.use("/api/user",verifyToken,userRoute)


 app.listen(PORT,()=>{
    console.log(`server running on port : ${PORT}`)
 })
