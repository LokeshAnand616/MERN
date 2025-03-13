require('dotenv').config();
const { MongoClient } = require('mongodb');

const URI = process.env.MONGO_URI;
const client = new MongoClient(URI);

async function aggregate() {
    try {
        await client.connect();
        const db = client.db('studentdb');
        const collection = db.collection('posts');

        const res = await collection.aggregate([
            { $match: { likes: { $gt: 100 } } }, 
            { $group: { _id: "$author", totallike: { $sum: "$likes" } } }, 
            { $sort: { totallike: -1 } }
        ]).toArray((err,res)=>{
            if(err){
                console.log(err);
            }else{
                console.log(res);
            }
        }); 
    } catch (err) {
        console.log(err);
    } finally {
        client.close();
    }
}

aggregate();
