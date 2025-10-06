const express = require('express')
const app = express()
const PORT = 5000
const route = require('./routes/route')

const response = {'status':'Health Check Route'}
app.get('/',(req,res)=>{
    return res.status(200).send(response)
})
app.use('/user',route)

app.listen(PORT,()=>{
    console.log("server running on PORT : "+PORT)
})
