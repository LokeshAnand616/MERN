require('dotenv').config();
const {MongoClient} = require('mongodb')

const URI = process.env.MONGO_URI
const client = new MongoClient(URI);

async function bucket() {
    try{
        await client.connect();
        const db = client.db('studentdb');
        const collection = db.collection('posts')
        const res = await collection.aggregate(
            [{$bucket:{
                groupBy:'$likes',
                boundaries:[0,10,50,100],
                default:'more than 100',
                output:{
                    toppost:{
                        $push:{
                            'title':'$title',
                            'author':'$author'
                        }
                    }
                }
            }}]
        ).toArray();
        res.forEach((bucket, index) => {
            console.log(`Bucket: ${bucket._id}`);
            bucket.toppost.forEach((post, i) => {
                console.log(`  Post ${i + 1}: ${post.title} by ${post.author}`);
            });
        });
            }catch(err){
        console.log(err)
    }finally{
        client.close();
    }
}
bucket();
