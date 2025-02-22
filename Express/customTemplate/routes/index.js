const express = require('express');
const router = express.Router();
const debugRoute= require('debug')('routes');


router.get("/", (req, res) => {
  console.log("Route handler is executing..."); // Check if this prints
  debugRoute('debugging route'); // This should log in terminal
  res.render("index", { title: "Custom Engine", message: "Hello from e-view!" });
});


module.exports =  router;