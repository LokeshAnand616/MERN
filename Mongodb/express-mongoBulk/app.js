require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Connection Error:", err));

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  city: String
});
const User = mongoose.model('User', UserSchema);

app.post('/bulk-write', async (req, res) => {
  try {
    const result = await User.bulkWrite([
      { insertOne: { document: { name: "Alice", age: 25, city: "New York" } } },
      { updateOne: { filter: { name: "Alice" }, update: { $set: { age: 26 } } } },
      { updateMany: { filter: { city: "New York" }, update: { $inc: { age: 1 } } } },
      { replaceOne: { filter: { name: "Alice" }, replacement: { name: "Alice", age: 28, country: "USA" } } },
      { deleteOne: { filter: { name: "Alice" } } },
      { deleteMany: { filter: { city: "New York" } } }
    ], { ordered: false });

    res.json({ success: true, result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports=app;
