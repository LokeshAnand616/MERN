require("dotenv").config();
const { MongoClient } = require("mongodb");

const URI = process.env.MONGO_URI;
const client = new MongoClient(URI);

async function updateOperations() {
    try {
        await client.connect();
        const db = client.db("myDatabase");
        const collection = db.collection("users");

        const updateOneResult = await collection.updateOne(
            { name: "Lokesh" },
            { $set: { age: 23 } }
        );
        console.log(`Modified ${updateOneResult.modifiedCount} document`);

        const updateManyResult = await collection.updateMany(
            { age: { $lt: 25 } },
            { $inc: { age: 1 } }
        );
        console.log(`Modified ${updateManyResult.modifiedCount} documents`);

        const replaceOneResult = await collection.replaceOne(
            { name: "Amit" },
            { name: "Amit Kumar", email: "amitk@example.com", age: 26 }
        );
        console.log(`Replaced ${replaceOneResult.modifiedCount} document`);

    } catch (err) {
        console.error("Error:", err);
    } finally {
        await client.close();
    }
}

updateOperations();
