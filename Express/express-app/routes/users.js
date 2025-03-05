const express = require("express");
const router = express.Router();

// Sample Users Data
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

// Get all users
router.get("/", (req, res) => {
  res.status(200).json(users);
});

// Get a specific user by ID
router.get("/:id", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: "User not found" });
  res.status(200).json(user);
});

// Create a new user
router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "Name is required" });

  const newUser = { id: users.length + 1, name };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Update a user
router.put("/:id", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: "User not found" });

  user.name = req.body.name || user.name;
  res.status(200).json(user);
});

// Delete a user
router.delete("/:id", (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "User not found" });

  users.splice(index, 1);
  res.status(204).send(); // 204: No Content
});

module.exports = router;
