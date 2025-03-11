require("dotenv").config();
const { MongoClient } = require("mongodb");

const URI = process.env.MONGO_URI;
const client = new MongoClient(URI);

async function deleteOperations() {
    try {
        await client.connect();
        const db = client.db("myDatabase");
        const collection = db.collection("users");

        const deleteOneResult = await collection.deleteOne({ name: "Lokesh" });
        console.log(`Deleted ${deleteOneResult.deletedCount} document`);

        const deleteManyResult = await collection.deleteMany({ age: { $lt: 25 } });
        console.log(`Deleted ${deleteManyResult.deletedCount} documents`);

    } catch (err) {
        console.error("Error:", err);
    } finally {
        await client.close();
    }
}

deleteOperations();
