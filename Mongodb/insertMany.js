require("dotenv").config(); // Load environment variables
const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = process.env.MONGO_URI; // Use MONGO_URI from .env

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Successfully connected to MongoDB!");

    const db = client.db("myDatabase");
    const collection = db.collection("users");

    const users = [
      { name: "Amit", email: "amit@example.com", age: 25 },
      { name: "Priya", email: "priya@example.com", age: 24 },
      { name: "Vikram", email: "vikram@example.com", age: 26 }
    ];

    const result = await collection.insertMany(users, {
      ordered: false, // Continues inserting even if one fails
      writeConcern: { w: "majority", j: true, wtimeout: 5000 },
      comment: "Bulk insert of users",
    });

    console.log(`Inserted ${result.insertedCount} documents`);

  } catch (err) {
    console.error("MongoDB Error:", err);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
