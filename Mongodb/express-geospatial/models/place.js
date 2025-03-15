const mongoose = require("mongoose");

// Define Place Schema
const placeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true }, // Example: Restaurant, Park, etc.
    location: {
        type: { type: String, enum: ["Point"], required: true },
        coordinates: { type: [Number], required: true } // [longitude, latitude]
    }
});

// Create indexes
placeSchema.index({ name: "text", description: "text", category: "text" }); // Full-text search index
placeSchema.index({ location: "2dsphere" }); // Geospatial index

const Place = mongoose.model("Place", placeSchema);
module.exports = Place;
