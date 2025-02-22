const express = require('express');
const router = express.Router();

router.get('/set', (req, res) => {
    req.session.userName = "Lokesh"; 
    res.send("Session set!");
  });

module.exports=router;