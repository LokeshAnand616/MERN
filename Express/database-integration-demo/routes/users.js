var express = require('express');
var router = express.Router();

/* GET users listing */
router.get('/', async function(req, res) {
  const db = req.app.locals.db;

  try {
    const users = await db.collection('users').find().toArray();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

module.exports = router;
