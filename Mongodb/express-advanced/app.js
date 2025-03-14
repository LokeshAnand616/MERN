require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("DB Connection Error:", err));

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
});
authorSchema.index({ name: 1 });

const Author = mongoose.model("Author", authorSchema);

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "Author" },
});

const Book = mongoose.model("Book", bookSchema);

const locationSchema = new mongoose.Schema({
  name: String,
  coordinates: { type: [Number], index: "2dsphere" },
});

const Location = mongoose.model("Location", locationSchema);

app.post("/add-author", async (req, res) => {
  try {
    const author = new Author(req.body);
    await author.save();
    res.send("Author added!");
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/find-author/:name", async (req, res) => {
  const result = await Author.find({ name: req.params.name }).explain("executionStats");
  res.json(result);
});

app.get("/aggregate", async (req, res) => {
  const result = await Author.aggregate([
    { $match: { age: { $gte: 25 } } },
    { $group: { _id: null, avgAge: { $avg: "$age" } } },
    { $sort: { avgAge: -1 } }
  ]);
  res.json(result);
});

app.get("/map-reduce", async (req, res) => {
  const map = function () {
    emit(this.age, 1);
  };

  const reduce = function (key, values) {
    return Array.sum(values);
  };

  const result = await Author.mapReduce({
    map,
    reduce,
    out: { inline: 1 },
  });

  res.json(result);
});

app.get("/search/:query", async (req, res) => {
  const result = await Author.find({ $text: { $search: req.params.query } });
  res.json(result);
});

app.post("/add-location", async (req, res) => {
  try {
    const location = new Location(req.body);
    await location.save();
    res.send("Location added!");
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/nearby", async (req, res) => {
  const { lng, lat } = req.query;
  const result = await Location.find({
    coordinates: {
      $near: {
        $geometry: { type: "Point", coordinates: [parseFloat(lng), parseFloat(lat)] },
        $maxDistance: 5000,
      },
    },
  });

  res.json(result);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
