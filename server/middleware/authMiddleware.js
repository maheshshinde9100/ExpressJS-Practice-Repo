require('dotenv').config()
const express= require('express')
const jwt = require('jsonwebtoken')

const verifyToken = (req,res,next)=>{
    const authHeaders = req.headers.authorization;
    if(!authHeaders || !authHeaders.startsWith('Bearer ')){
        return res.status(500).json({
            error:"Auth token not provided"
        })
    }
    const token = authHeaders.split(' ')[1];
    try{
        const decodedUser = jwt.verify(token,process.env.JWT_SECRET_KEY)
        console.log(decodedUser)
        req.user = jwt.decodedUser
        next();
   } catch (err) {
    return res.status(403).json({ error: 'Invalid or expired token.' });
  }

};

module.exports = verifyToken;