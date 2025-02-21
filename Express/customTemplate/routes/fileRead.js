const express = require('express');
const router = express.Router()
router.get("/readfile", (req, res, next) => {
    fs.readFile("/file-does-not-exist", "utf8", (err, data) => {
      if (err) {
        next(err);
      } else {
        res.send(data);
      }
    });
  });

module.exports = router;