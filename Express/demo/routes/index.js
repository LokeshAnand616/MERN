var express = require('express');
var router = express.Router();

/* GET home page. */
//router level middleware executed before each req or res in this router

router.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Js', message:'lokesh' });
});

router.get('/time', (req, res) => {
  let responseText = 'Hello World!<br>'
  responseText += `<small>Requested at: ${req.requestTime}</small>`
  res.send(responseText)
})

module.exports = router;
