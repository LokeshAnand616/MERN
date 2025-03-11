require("dotenv").config();  // Load environment variables
const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = process.env.MONGO_URI;  // Use MONGO_URI from .env

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

    const result = await collection.insertOne(
      { name: "Lokesh", email: "lokesh@example.com", age: 22 },
      { 
        writeConcern: { w: "majority", j: true, wtimeout: 5000 },//write concern used to specify the wire aknowledgement to the replica, j is journal save to the disk, write timeout is set to 5 sec
        bypassDocumentValidation: true, // bypass any valide schema
        comment: "Adding new user", // add comment for the insertion
        hint: { email: 1 } // add specified index
      }
    );

    console.log("Inserted document ID:", result.insertedId);

  } catch (err) {
    console.error("MongoDB connection error:", err);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
