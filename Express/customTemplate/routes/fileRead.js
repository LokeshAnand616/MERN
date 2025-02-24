const express = require('express');
const fs = require('fs');
const router = express.Router()
router.get("/readfile", (req, res, next) => {
    fs.readFile("./file.txt", "utf8", (err, data) => { 
      if (err) {
        next(err);
      } else {
        res.send(data);
      }
    });
  });

module.exports = router;