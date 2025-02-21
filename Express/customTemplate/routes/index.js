const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index", { title: "Custom Engine", message: "Hello from e-view!" });
  });

module.exports =  router;