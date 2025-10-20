const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  return res.json({ msg: "Hey, I'm from register route" });
});

module.exports = router;
