require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const userRoute = require('./routes/userRoute')

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

 app.use("/api/user",userRoute)

 app.listen(PORT,()=>{
    console.log(`server running on port : ${PORT}`)
 })
