const express = require("express");
const router = express.Router();

let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

router.use((req, res, next) => {   
  console.log('Time:', Date.now())
  next()
})
router.get("/", (req, res) => {
  res.render("users", { users });
});

router.post("/", (req, res) => {  
  const { name } = req.body;
  if (name) {
    const newUser = { id: users.length + 1, name };
    users.push(newUser);
  }
  res.redirect("/users"); 
});

module.exports = router;
