const express = require('express');
const router = express.Router();

let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
 
router.get("/", (req, res) => {
  res.render("index", { users });
});
 
router.post("/users", (req, res) => {
  const { name } = req.body;
  if (name) {
    const newUser = { id: users.length + 1, name };
    users.push(newUser);
  }
  res.redirect("/");
});
 
router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  users = users.map((user) => (user.id == id ? { ...user, name } : user));
  res.json({ message: "User updated", users });
});
 
router.patch("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  users = users.map((user) => (user.id == id ? { ...user, name: name || user.name } : user));
  res.json({ message: "User partially updated", users });
});
 
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id != id);
  res.json({ message: "User deleted", users });
});
 