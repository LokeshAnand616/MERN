require("dotenv").config();
const {MongoClient} = require("mongodb");

const URI = process.env.MONGO_URI;
const client = new MongoClient(URI);

async function queryOperations() {
    try{
        await client.connect();
        const db = client.db('studentdb');
        const collection = db.collection('details');
        const  result = await collection.find({});
        console.log(await result.toArray());
    }catch(err){
        console.log(err)
    }finally{
        client.close();
    }
}

queryOperations();