const express = require('express')
const router = express.Router()

const user = {
    name: 'mahesh',
    age: 19
}

router.get('/healthcheck',(req,res)=>{
    return res.status(200).send('worlddd')
})

router.get('/me',(req,res)=>{
    return res.status(200).send(user)
})

module.exports = router