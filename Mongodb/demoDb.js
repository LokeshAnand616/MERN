const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017"; // Change if MongoDB is running elsewhere
const client = new MongoClient(uri);

async function main() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");

        // 🔹 Select Database and Collection
        const db = client.db("myDatabase");
        const users = db.collection("users");

        // 🔹 Insert Data
        await users.insertMany([
            { name: "Alice", age: 30, city: "London" },
            { name: "Bob", age: 28, city: "Paris" }
        ]);
        console.log("Data inserted");

        // 🔹 Query Data
        const allUsers = await users.find().toArray();
        console.log(" All Users:", allUsers);

        // 🔹 Update Data
        await users.updateOne({ name: "Alice" }, { $set: { age: 31 } });
        console.log("Alice's age updated");

        // 🔹 Delete Data
        await users.deleteOne({ name: "Bob" });
        console.log("Bob deleted");

    } catch (err) {
        console.error(" Error:", err);
    } finally {
        // 🔹 Close Connection
        await client.close();
        console.log("MongoDB connection closed");
    }
}

// Run the function
main();
