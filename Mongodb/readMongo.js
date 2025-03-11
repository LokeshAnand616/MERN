require("dotenv").config();
const { MongoClient } = require("mongodb");

const URI = process.env.MONGO_URI;
const client = new MongoClient(URI);

async function readOperations() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });

        const db = client.db("myDatabase");
        const collection = db.collection("users");

        const allUsers = await collection.find().toArray();
        console.log("All Users:", allUsers);

        const oneUser = await collection.findOne({ name: "Lokesh" });
        console.log("One User:", oneUser);

        const filteredUsers = await collection.find({ age: { $gt: 20 } }).toArray();
        console.log("Filtered Users:", filteredUsers);

        const userCount = await collection.countDocuments();
        console.log("Total Users:", userCount);

        const exists = await collection.find({ email: "lokesh@example.com" }).limit(1).count();
        console.log("User Exists:", exists > 0);

        const sortedUsers = await collection.find().sort({ age: -1 }).toArray();
        console.log("Sorted Users:", sortedUsers);

        const projectionUsers = await collection.find({}, { projection: { name: 1, _id: 0 } }).toArray();
        console.log("Projected Users:", projectionUsers);

    } catch (err) {
        console.error("Error:", err);
    } finally {
        await client.close();
    }
}

readOperations();
