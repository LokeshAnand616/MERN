require("dotenv").config();
const mongoose = require("mongoose");

const URI = process.env.MONGO_URI;
console.log(URI);

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected Successfully"))
  .catch((err) => console.log(err));

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "Author" },
});

const Book = mongoose.model("Book", BookSchema);

const AuthorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
});

// Ensure single index on 'name' field
AuthorSchema.index({ name: 1 });

const Author = mongoose.model("Author", AuthorSchema);

// Explicitly create the index
async function createSingleIndex() {
  try {
    await Author.collection.createIndex({ name: 1 });
    console.log("Single Index on `name` created successfully!");
  } catch (error) {
    console.error("Error creating index:", error);
  }
}

async function insert() {
  try {
    const authorRes = await Author.collection.insertOne({ name: "Lokesh", age: 23 });
    const authorId = authorRes.insertedId;

    const bookRes = await Book.collection.insertOne({
      title: "Mongoose Deep Dive",
      genre: "Programming",
      author: authorId,
    });

    const bookId = bookRes.insertedId;

    await Author.collection.updateOne(
      { _id: authorId },
      { $push: { books: bookId } }
    );

    console.log("Data Inserted Successfully Using `insertOne()`");
  } catch (error) {
    console.error("Error:", error);
  }
}

async function fetchName() {
  try {
    const result = await Author.find({ name: "Lokesh" })
      .hint({ name: 1 }) // Force IXSCAN
      .explain("executionStats");

    console.log("Query Execution Plan:", JSON.stringify(result, null, 2));
  } catch (err) {
    console.log("Error fetching data:", err);
  } finally {
    mongoose.connection.close();
  }
}

(async () => {
  await createSingleIndex(); // Create index before inserting data
  await insert();
  await fetchName();
})();
