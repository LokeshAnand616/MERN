const Place = require("../models/Place");

// Add a New Place
exports.addPlace = async (req, res) => {
    try {
        const { name, description, category, longitude, latitude } = req.body;

        const place = new Place({
            name,
            description,
            category,
            location: {
                type: "Point",
                coordinates: [longitude, latitude]
            }
        });

        await place.save();
        res.status(201).json({ message: "Place added successfully", place });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Perform Full-Text Search
exports.searchPlaces = async (req, res) => {
    try {
        const { query } = req.query;
        const results = await Place.find({ $text: { $search: query } });
        res.json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Find Nearby Places within a Given Radius (in km)
exports.findNearbyPlaces = async (req, res) => {
    try {
        const { longitude, latitude, maxDistance } = req.query;

        const results = await Place.find({
            location: {
                $near: {
                    $geometry: { type: "Point", coordinates: [parseFloat(longitude), parseFloat(latitude)] },
                    $maxDistance: parseFloat(maxDistance) * 1000 // Convert km to meters
                }
            }
        });

        res.json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
