const express = require("express");
const router = express.Router();

router.get("/setcookie", (req, res) => {
  res.cookie("user", "Lokesh", {
    maxAge: 60000, 
    httpOnly: true,
    secure: false,
    sameSite: "Strict",
  });
  res.send("Cookie has been set!");
});

module.exports = router;
