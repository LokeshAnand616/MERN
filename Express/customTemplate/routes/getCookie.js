const express = require('express');
const router = express.Router();

router.get('/check', (req, res) => {
    res.send(req.session.userName ? `Hello ${req.session.userName}` : "No session found!");
  });

module.exports=router;