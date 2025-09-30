const express = require('express')
const port = 3000
const app = express()

//for accesing static files from public -images ,css,etc
app.use("/static",express.static('public'))  // http://localhost:3000/static/images/chintamani1.jpg

let user= {
    name:"mahesh",
    age:19,
    education:"BTech in Computer Engineering"
}

app.get('/me',(req,res)=>{
    res.send(user)  //api response
    // res.send(JSON.stringify(user))
})

app.get('/error', (req, res) => {
    let stringData = '{"name":"mahesh","age":"19"}'; // valid JSON
    let jsonData = JSON.parse(stringData);
    // res.status(500).send(jsonData); //sending api format response
    res.status(500).send("error info : " + JSON.stringify(jsonData));  //sending text fomrat on screen
})

app.listen(port,()=>{
    console.log("server running on port : "+port)
})