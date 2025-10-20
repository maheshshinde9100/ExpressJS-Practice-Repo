const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel'); // ✅ use require
require('dotenv').config();

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const userInfo = req.body;

    const existingUser = await User.findOne({ username: userInfo.username });

    if (existingUser) {
      const token = jwt.sign(
        { username: userInfo.username },
        process.env.JWT_SECRET_KEY,
        { expiresIn: '1h' }
      );
      return res.json({ jwt_token: token });
    } else {
      return res.status(404).json({ message: "User not found..!!!" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
