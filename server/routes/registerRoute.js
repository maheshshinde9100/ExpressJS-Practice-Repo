const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { username, email, password, age } = req.body;

    // 1. Check if user exists (by username OR email)
    const existingUser = await User.findOne({
      $or: [{ username }, { email }]
    });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // 2. Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. Create and save user
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      age
    });

    return res.status(201).json({ message: "User registered successfully!", user: newUser });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
