const express = require("express");
const router = express.Router();

router.get("/setsignedcookie", (req, res) => {
  res.cookie("authToken", "abcd1234", { signed: true });
  res.send("Signed Cookie Set!");
});

router.get("/getsignedcookie", (req, res) => {
  const authToken = req.signedCookies.authToken;
  if (authToken) {
    res.send(`Signed Cookie Retrieved: ${authToken}`);
  } else {
    res.send("No Signed Cookie Found");
  }
});

module.exports = router;
