const express = require("express");
const router = express.Router();

router.get("/deletecookie", (req, res) => {
  res.clearCookie("user");
  res.send("Cookie has been deleted!");
});

module.exports = router;
