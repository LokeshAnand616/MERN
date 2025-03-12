require("dotenv").config();
const { MongoClient } = require("mongodb");

const URI = process.env.MONGO_URI;
const client = new MongoClient(URI);

async function inserDetails() {
  try {
    await client.connect();
    const db = client.db("studentdb");
    const collection = db.collection("details");
    await collection.insertMany([
      {
        name: "Lokesh",
        age: 18,
        class: "A",
      },
      {
        name: "Kamal",
        age: 20,
        class: "B",
      },
      {
        name: "Rajini",
        age: 19,
        class: "A",
      },
      {
        name: "Ajith",
        age: 21,
        class: "C",
      },
      {
        name: "Surya",
        age: 22,
        class: "B",
      },
      {
        name: "Vijay",
        age: 18,
        class: "C",
      },
      {
        name: "Dhanush",
        age: 20,
        class: "A",
      },
      {
        name: "Samantha",
        age: 19,
        class: "B",
      },
      {
        name: "Nayanthara",
        age: 22,
        class: "C",
      },
      {
        name: "Trisha",
        age: 20,
        class: "A",
      },
    ]);
    console.log("query updated successfully");
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await client.close();
  }
}

inserDetails();
