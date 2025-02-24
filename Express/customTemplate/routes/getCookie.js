const express = require("express");
const router = express.Router();

router.get("/getcookie", (req, res) => {
  const user = req.cookies.user;
  if (user) {
    res.send(`Cookie Retrieved: ${user}`);
  } else {
    res.send("No Cookie Found");
  }
});

module.exports = router;
