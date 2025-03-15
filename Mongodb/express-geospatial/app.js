const express = require("express");
const router = express.Router();
const placeController = require("../controllers/placeController");

// Add a new place
router.post("/add", placeController.addPlace);

// Search places by name, description, or category
router.get("/search", placeController.searchPlaces);

// Find nearby places based on coordinates and max distance
router.get("/nearby", placeController.findNearbyPlaces);

module.exports = router;
