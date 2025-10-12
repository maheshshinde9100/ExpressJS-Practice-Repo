const express = require('express');
const cors= require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

mongoose.connect('mongodb://localhost:27017/practice_db')
.then(()=> console.log('mongodb connection sucessfull..!'))
.catch((err)=> console.error(err));

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    return res.status(200).send("Hello from express.. backend")
})

app.listen(port,()=> console.log('server running on port :'+port))