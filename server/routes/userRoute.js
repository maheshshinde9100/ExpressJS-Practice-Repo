const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/userModel'); 
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'server error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const userData = req.body;
    const user = await User.create(userData);
    return res.status(201).json(user);
  } catch (err) {
    console.error(err);
    return res.status(400).json({ error: err.message || 'invalid data' });
  }
});

router.put('/:username', async (req, res) => {
  try {
    const { username } = req.params;
    const newData = req.body;

    const updatedUser = await User.findOneAndUpdate(
      { username: username },
      { $set: newData },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json(updatedUser);
  } catch (err) {
    console.error(err);
    return res.status(400).json({ error: err.message || 'Update error' });
  }
});

module.exports = router;
