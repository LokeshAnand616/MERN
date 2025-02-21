const express = require('express');
const router = express.Router();
router.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
  })

router

    .get('/multiroute',
        (req, res, next) => {
            console.log("Processing request...");
            next(); 
          },
          (req, res) => {
            res.send("This is multi handler in a single route");
          }
    )

module.exports = router;
