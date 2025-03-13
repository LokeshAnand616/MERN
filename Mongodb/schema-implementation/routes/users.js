const express = require("express");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");

const router = express.Router();

// @route  POST /users
// @desc   Create a new user
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Valid email is required").isEmail(),
    check("password", "Password must be 6 or more characters").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: "User already exists" });
      }

      user = new User({ name, email, password });
      await user.save();

      res.status(201).json({ msg: "User created successfully", user });
    } catch (err) {
      res.status(500).json({ msg: "Server error", error: err.message });
    }
  }
);

module.exports = router;
