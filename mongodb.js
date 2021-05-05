//CRUD create read update delete

// const mongodb = require('mongodb');

// //Required for connection to the database
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const {MongoClient, ObjectId, ObjectID} = require('mongodb');

const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName= 'task-manager';

MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
    if (error){
        return console.log('Unable to connect to the database');
    }
    console.log('Connected correctly');
    const db = client.db(databaseName);
    db.collection('tasks').findOne({_id : ObjectID("609255aaadeeb5192f8fc35d")}, (error, task)=>{
        if(error){
            return console.log('Error detected');
        }
        console.log(task);
    })
    db.collection('tasks').find({completion: false}).toArray((error,task) => {
        console.log(task);
    })
})

